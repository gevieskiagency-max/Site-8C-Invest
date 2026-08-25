import React, { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Play, 
  Landmark, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles
} from 'lucide-react';
import heroVideoSrc from '../assets/videos/Website_background_animation_design_202608211801.mp4';

interface HeroSectionProps {
  id?: string;
  className?: string;
}

export const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ id = 'hero-section', className = '' }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      const vid = videoRef.current;
      if (!vid) return;

      vid.muted = true;
      vid.defaultMuted = true;
      vid.playsInline = true;

      const playVideo = () => {
        vid.play().catch(() => {
          const onInteract = () => {
            vid.play().catch(() => {});
            ['click', 'touchstart', 'scroll', 'keydown'].forEach((evt) =>
              window.removeEventListener(evt, onInteract)
            );
          };
          ['click', 'touchstart', 'scroll', 'keydown'].forEach((evt) =>
            window.addEventListener(evt, onInteract, { once: true, passive: true })
          );
        });
      };

      if (vid.readyState >= 1) {
        playVideo();
      } else {
        vid.addEventListener('loadeddata', playVideo, { once: true });
        vid.addEventListener('canplay', playVideo, { once: true });
      }

      // Explicitly trigger load to ensure video pipeline starts immediately
      vid.load();
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <section
        id={id}
        ref={ref}
        aria-label="8C Inve$t - Capital Inteligente"
        className={`relative min-h-screen md:min-h-[880px] w-full flex flex-col justify-between overflow-hidden bg-[#050505] text-[#FFFFFF] ${className}`}
      >
        {/* ======================================================== */}
        {/* VIDEO BACKGROUND                                         */}
        {/* ======================================================== */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none">
          {/* Main Hero Video Background */}
          <video
            ref={videoRef}
            src={heroVideoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-[70%_center] md:object-right opacity-90 transition-opacity duration-1000"
          >
            <source src={heroVideoSrc} type="video/mp4" />
            <source src="/hero_video.mp4" type="video/mp4" />
          </video>

          {/* ======================================================== */}
          {/* OVERLAY                                                  */}
          {/* ======================================================== */}
          {/* Gradient on the left for text readability, keeping the gold animation vibrant on the right */}
          <div className="absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[50%] bg-gradient-to-r from-[#050505] via-[#050505]/75 to-transparent pointer-events-none" />

          {/* Subtle bottom fade to transition to the next section */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
        </div>

        {/* ======================================================== */}
        {/* HERO CONTENT (LADO ESQUERDO — NÃO CENTRALIZADO)          */}
        {/* ======================================================== */}
        <main className="relative z-20 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-28 sm:pt-36 md:pt-40 pb-12 md:pb-20 flex-1 flex flex-col justify-center">
          {/* Strict Width Constraint for Content Left Placement */}
          <div className="w-full max-w-[640px] lg:max-w-[660px] text-left">
            {/* BADGE SUPERIOR */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C49A52]/25 bg-black/40 backdrop-blur-md mb-6 sm:mb-8 transition-all hover:border-[#C49A52]/50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E4C477] animate-pulse shadow-[0_0_8px_#E4C477]" />
              <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-[#E4C477]">
                CAPITAL • ESTRATÉGIA • GOVERNANÇA • GESTÃO
              </span>
            </div>

            {/* HEADLINE */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.04em] leading-[1.0] sm:leading-[0.98] text-[#FFFFFF] mb-6">
              Capital inteligente <br className="hidden sm:block" />
              para transformar <br />
              <span className="bg-gradient-to-r from-[#9C7131] via-[#E7C778] to-[#B88A43] bg-clip-text text-transparent">
                empresas em valor.
              </span>
            </h1>

            {/* SUBHEADLINE */}
            <p className="text-sm sm:text-base lg:text-[17px] text-[#FFFFFF]/60 leading-relaxed font-light max-w-[580px] mb-8 sm:mb-10">
              Integramos capital, estratégia, governança e gestão para transformar desafios empresariais em oportunidades concretas de crescimento e valorização.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10 sm:mb-12">
              {/* CTA Principal */}
              <a
                href="mailto:contato@superin.com"
                id="hero-primary-cta"
                className="group h-[52px] px-8 rounded-full bg-gradient-to-r from-[#C49A52] via-[#E4C477] to-[#8D642C] text-black font-semibold text-xs sm:text-[13px] uppercase tracking-wider flex items-center justify-center gap-3 hover:brightness-105 hover:shadow-[0_0_25px_rgba(196,154,82,0.4)] transition-all duration-300 active:scale-[0.98]"
              >
                <span>Fale com a 8C</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* CTA Secundário */}
              <a
                href="#atuacao"
                id="hero-secondary-cta"
                onClick={(e) => scrollToSection(e, 'atuacao')}
                className="group h-[52px] px-7 rounded-full border border-white/15 hover:border-[#C49A52]/60 bg-black/40 hover:bg-white/[0.04] backdrop-blur-md text-[#FFFFFF]/90 hover:text-[#FFFFFF] font-medium text-xs sm:text-[13px] uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300"
              >
                <Play className="w-3.5 h-3.5 text-[#E4C477] fill-[#E4C477]/20 group-hover:fill-[#E4C477] transition-all duration-300" />
                <span>Conheça nossa atuação</span>
              </a>
            </div>

            {/* ======================================================== */}
            {/* MICRO BENEFÍCIOS (MICROCARDS)                            */}
            {/* ======================================================== */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 max-w-[590px]">
              {/* Microcard 1: Capital Inteligente */}
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-black/40 border border-white/10 backdrop-blur-md hover:border-[#C49A52]/40 transition-colors">
                <Landmark className="w-4 h-4 text-[#E4C477] shrink-0" />
                <span className="text-xs font-medium tracking-wide text-white/80">
                  Capital Inteligente
                </span>
              </div>

              {/* Microcard 2: Governança */}
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-black/40 border border-white/10 backdrop-blur-md hover:border-[#C49A52]/40 transition-colors">
                <ShieldCheck className="w-4 h-4 text-[#E4C477] shrink-0" />
                <span className="text-xs font-medium tracking-wide text-white/80">
                  Governança
                </span>
              </div>

              {/* Microcard 3: Gestão Estratégica */}
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-black/40 border border-white/10 backdrop-blur-md hover:border-[#C49A52]/40 transition-colors">
                <TrendingUp className="w-4 h-4 text-[#E4C477] shrink-0" />
                <span className="text-xs font-medium tracking-wide text-white/80">
                  Gestão Estratégica
                </span>
              </div>
            </div>
          </div>
        </main>

        {/* Hero Bottom Ambient Anchor */}
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pb-6 sm:pb-8 flex items-center justify-between text-xs text-white/40 border-t border-white/5 pt-4">
          <span className="font-mono text-[10px] tracking-widest text-[#E4C477]/80">
            8C INVE$T · BUSINESS FOUND
          </span>
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase">
            <Sparkles className="w-3 h-3 text-[#E4C477]" />
            <span>EXCLUSIVIDADE & VALOR</span>
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = 'HeroSection';

