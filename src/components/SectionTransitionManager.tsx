import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { StickyNavbar } from './StickyNavbar';
import { HeroSection } from './HeroSection';
import { SectionTwoPhilosophy } from './SectionTwoPhilosophy';
import { SectionThreePinnedMethodology } from './SectionThreePinnedMethodology';
import { SectionFourGovernance } from './SectionFourGovernance';
import { SectionFiveAdvisoryCTA } from './SectionFiveAdvisoryCTA';
import { FooterInstitutional } from './FooterInstitutional';
import { ContinuousObjectCanvas } from './ContinuousObjectCanvas';

gsap.registerPlugin(ScrollTrigger);

export const SectionTransitionManager: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const sec2Ref = useRef<HTMLDivElement>(null);
  const sec3Ref = useRef<HTMLDivElement>(null);
  const sec4Ref = useRef<HTMLDivElement>(null);
  const sec5Ref = useRef<HTMLDivElement>(null);
  
  const lenisRef = useRef<Lenis | null>(null);

  const [currentSection, setCurrentSection] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [stepProgress, setStepProgress] = useState<number>(0);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>('#050505');

  // Initialize Lenis & GSAP ScrollTrigger
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? e.scroll / maxScroll : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    });

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Global GSAP Scroll Context
    const ctx = gsap.context(() => {
      if (mediaQuery.matches) {
        return;
      }

      // ========================================================
      // 01. HERO TRIGGER
      // ========================================================
      if (heroRef.current) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          onEnter: () => {
            setCurrentSection(0);
            setBackgroundColor('#050505');
          },
        });
      }

      // ========================================================
      // 02. SECTION 02 (FILOSOFIA / SOBRE / ATUAÇÃO)
      // ========================================================
      if (sec2Ref.current) {
        ScrollTrigger.create({
          trigger: sec2Ref.current,
          start: 'top 70%',
          end: 'bottom 30%',
          onEnter: () => {
            setCurrentSection(1);
            setBackgroundColor('#090704');
          },
          onLeaveBack: () => {
            setCurrentSection(0);
            setBackgroundColor('#050505');
          },
        });
      }

      // ========================================================
      // 03. SECTION 03 (METODOLOGIA)
      // ========================================================
      if (sec3Ref.current) {
        ScrollTrigger.create({
          trigger: sec3Ref.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onEnter: () => {
            setCurrentSection(2);
            setBackgroundColor('#070708');
          },
          onLeaveBack: () => {
            setCurrentSection(1);
            setBackgroundColor('#090704');
          },
          onUpdate: (self) => {
            const p = self.progress;
            setStepProgress(p);
            const stepIdx = Math.min(3, Math.floor(p * 4));
            setActiveStep(stepIdx);
          },
        });
      }

      // ========================================================
      // 04. SECTION 04 (GOVERNANÇA)
      // ========================================================
      if (sec4Ref.current) {
        ScrollTrigger.create({
          trigger: sec4Ref.current,
          start: 'top 70%',
          end: 'bottom 30%',
          onEnter: () => {
            setCurrentSection(3);
            setBackgroundColor('#0c0905');
          },
          onLeaveBack: () => {
            setCurrentSection(2);
            setBackgroundColor('#070708');
          },
        });
      }

      // ========================================================
      // 05. SECTION 05 (ADVISORY & CTA)
      // ========================================================
      if (sec5Ref.current) {
        ScrollTrigger.create({
          trigger: sec5Ref.current,
          start: 'top 70%',
          end: 'bottom bottom',
          onEnter: () => {
            setCurrentSection(4);
            setBackgroundColor('#050505');
          },
          onLeaveBack: () => {
            setCurrentSection(3);
            setBackgroundColor('#0c0905');
          },
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  const handleManualStepChange = (stepIdx: number) => {
    setActiveStep(stepIdx);
  };

  return (
    <div
      ref={containerRef}
      id="app-transition-canvas-root"
      className="relative w-full min-h-screen transition-colors duration-1000 ease-out overflow-x-hidden"
      style={{ backgroundColor }}
    >
      {/* Universal Floating Sticky Navbar with Brand Logo & Menu */}
      <StickyNavbar currentSection={currentSection} />

      {/* 1. Dynamic Luxury Vignette & Noise Texture */}
      <div
        id="dynamic-vignette"
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-700"
        style={{
          background:
            'radial-gradient(circle at center, transparent 40%, rgba(5, 5, 5, 0.7) 100%)',
          opacity: currentSection === 2 ? 0.45 : 0.25,
        }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 noise-overlay opacity-30"
      />

      {/* 2. Three.js Continuous Object & Particle System */}
      {!reducedMotion && (
        <ContinuousObjectCanvas
          scrollProgress={scrollProgress}
          currentSection={currentSection}
          pinnedStepProgress={stepProgress}
        />
      )}

      {/* 3. Main Foreground Content Layer */}
      <div className="relative z-10 w-full">
        {/* Section 01: Hero Section */}
        <HeroSection ref={heroRef} id="hero-section" />

        {/* Section 02: Filosofia de Gestão & Atuação 360° */}
        <SectionTwoPhilosophy ref={sec2Ref} id="sobre" />

        {/* Section 03: Metodologia 8C (Pinned Stage with 4 Step Sub-phases) */}
        <SectionThreePinnedMethodology
          ref={sec3Ref}
          id="metodologia"
          activeStep={activeStep}
          stepProgress={stepProgress}
          onStepChange={handleManualStepChange}
        />

        {/* Section 04: Governança & Riscos */}
        <SectionFourGovernance ref={sec4Ref} id="experiencia" />

        {/* Section 05: Advisory Concierge & Contato */}
        <SectionFiveAdvisoryCTA ref={sec5Ref} id="contato" />

        {/* Section 06: Institutional Footer */}
        <FooterInstitutional />
      </div>
    </div>
  );
};
