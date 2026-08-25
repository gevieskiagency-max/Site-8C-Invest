import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export interface ServiceCardData {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  highlights: string[];
}

export const SERVICES_360: ServiceCardData[] = [
  {
    id: 'srv-1',
    number: '01',
    category: 'Diagnóstico',
    title: 'Diagnóstico Empresarial 360°',
    description:
      'Mapeamento completo da empresa, identificando gargalos, riscos, oportunidades e potenciais de crescimento em todas as áreas da organização.',
    highlights: ['Raio-X 360°', 'Gargalos & Riscos', 'Potenciais de Crescimento'],
  },
  {
    id: 'srv-2',
    number: '02',
    category: 'Capital',
    title: 'Estruturação de Capital & Captação',
    description:
      'Análise da necessidade de capital, estruturação financeira e desenvolvimento de estratégias para captação junto a instituições financeiras, fundos e investidores.',
    highlights: ['Crédito & Bancos', 'Estruturação Financeira', 'Captação & Investidores'],
  },
  {
    id: 'srv-3',
    number: '03',
    category: 'Estratégia',
    title: 'Planejamento Estratégico & Gestão da Execução',
    description:
      'Transformamos estratégia em execução por meio de planos de ação, metas, indicadores, responsáveis e acompanhamento sistemático dos resultados.',
    highlights: ['Metas & Planos de Ação', 'Indicadores de Desempenho', 'Acompanhamento Sistemático'],
  },
  {
    id: 'srv-4',
    number: '04',
    category: 'Governança',
    title: 'Governança & Transformação Organizacional',
    description:
      'Estruturação de processos, controles, indicadores, lideranças e boas práticas para criar uma organização mais segura, transparente e preparada para escalar.',
    highlights: ['Estruturação de Processos', 'Controles Internos', 'Liderança & Escala'],
  },
  {
    id: 'srv-5',
    number: '05',
    category: 'Mercado',
    title: 'Inteligência de Mercado',
    description:
      'Análise de tendências, concorrência, benchmarking e oportunidades para criação, evolução e diversificação de produtos e negócios.',
    highlights: ['Tendências & Oportunidades', 'Benchmarking Competitivo', 'Diversificação de Produtos'],
  },
  {
    id: 'srv-6',
    number: '06',
    category: 'Marca',
    title: 'Marketing Estratégico & Marca',
    description:
      'Posicionamento, fortalecimento da percepção de valor, geração de demanda e construção de autoridade para ampliar a presença e competitividade da empresa.',
    highlights: ['Posicionamento de Valor', 'Construção de Autoridade', 'Geração de Demanda'],
  },
  {
    id: 'srv-7',
    number: '07',
    category: 'Digital',
    title: 'Transformação Digital',
    description:
      'Avaliação e implementação de tecnologias e sistemas de gestão capazes de aumentar produtividade, controle, eficiência operacional e qualidade das informações.',
    highlights: ['Sistemas de Gestão', 'Eficiência Operacional', 'Qualidade da Informação'],
  },
  {
    id: 'srv-8',
    number: '08',
    category: 'Financeiro',
    title: 'Gestão Financeira',
    description:
      'Planejamento, orçamento, fluxo de caixa, capital de giro, projeções financeiras e criação de mecanismos para aumentar previsibilidade e disciplina financeira.',
    highlights: ['Orçamento & Fluxo de Caixa', 'Capital de Giro & Projeções', 'Previsibilidade & Disciplina'],
  },
  {
    id: 'srv-9',
    number: '09',
    category: 'Tributário',
    title: 'Planejamento Tributário & Regularização',
    description:
      'Análise da estrutura tributária, identificação de oportunidades de otimização, mitigação de riscos e adequação fiscal.',
    highlights: ['Estrutura Tributária', 'Mitigação de Riscos Fiscais', 'Otimização & Adequação'],
  },
];

export const Diagnostico360ScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const tiltStageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sweepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const activeCounterRef = useRef<HTMLSpanElement>(null);

  const [activeServiceIdx, setActiveServiceIdx] = useState<number>(0);

  // Micro-tilt interaction handled via direct GSAP quickSetter (ZERO React re-renders on mousemove)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltStageRef.current) return;
    const rect = tiltStageRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(tiltStageRef.current, {
      rotateY: px * 3, // ±1.5deg
      rotateX: -py * 2, // ±1.0deg
      x: px * 6,
      y: py * 6,
      duration: 0.5,
      ease: 'power1.out',
      overwrite: 'auto',
    });
  };

  const handleMouseLeave = () => {
    if (!tiltStageRef.current) return;
    gsap.to(tiltStageRef.current, {
      rotateY: 0,
      rotateX: 0,
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  // Function to manually switch to a service card
  const selectService = (idx: number) => {
    if (idx < 0 || idx >= SERVICES_360.length) return;
    setActiveServiceIdx(idx);

    cardsRef.current.forEach((card, cIdx) => {
      if (!card) return;
      if (cIdx === idx) {
        gsap.to(card, {
          autoAlpha: 1,
          y: 0,
          z: 0,
          scale: 1,
          rotateX: 0,
          filter: 'blur(0px)',
          pointerEvents: 'auto',
          zIndex: 30,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      } else {
        gsap.to(card, {
          autoAlpha: 0,
          y: cIdx < idx ? -20 : 20,
          z: -100,
          scale: 0.94,
          rotateX: cIdx < idx ? -4 : 4,
          filter: 'blur(6px)',
          pointerEvents: 'none',
          zIndex: 10,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    });

    // Update progress bars
    progressBarsRef.current.forEach((bar, bIdx) => {
      if (!bar) return;
      if (bIdx < idx) {
        bar.style.backgroundColor = 'rgba(196, 154, 82, 0.95)';
      } else if (bIdx === idx) {
        bar.style.backgroundColor = 'rgba(228, 196, 119, 1)';
      } else {
        bar.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
      }
    });

    if (activeCounterRef.current) {
      const numStr = String(idx + 1).padStart(2, '0');
      activeCounterRef.current.innerText = `SERVIÇO ${numStr} DE 09`;
    }
  };

  // GSAP Pinned Master Timeline Setup with Absolute Overlapping Crossfade
  useEffect(() => {
    const section = sectionRef.current;
    const pinTarget = pinContainerRef.current;
    if (!section || !pinTarget) return;

    const total = SERVICES_360.length;

    const ctx = gsap.context(() => {
      // 1. GUARANTEED INITIAL STATE
      // Card 0 is 100% visible immediately upon load
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        if (idx === 0) {
          gsap.set(card, {
            autoAlpha: 1,
            opacity: 1,
            scale: 1,
            z: 0,
            y: 0,
            rotateX: 0,
            filter: 'blur(0px)',
            pointerEvents: 'auto',
            zIndex: 30,
          });
        } else {
          gsap.set(card, {
            autoAlpha: 0,
            opacity: 0,
            scale: 0.94,
            z: -100,
            y: 30,
            rotateX: 4,
            filter: 'blur(6px)',
            pointerEvents: 'none',
            zIndex: 10,
          });
        }
      });

      // Progress bars initial state
      progressBarsRef.current.forEach((bar, idx) => {
        if (!bar) return;
        gsap.set(bar, {
          backgroundColor: idx === 0 ? 'rgba(196, 154, 82, 0.95)' : 'rgba(255, 255, 255, 0.12)',
        });
      });

      // 2. MASTER GSAP SCRUB TIMELINE
      // Total scroll distance: 540% for smooth and comfortable reading of all 9 services
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=540%',
          pin: pinTarget,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            const currentIdx = Math.min(total - 1, Math.max(0, Math.floor(p * total)));
            
            if (activeCounterRef.current) {
              const numStr = String(currentIdx + 1).padStart(2, '0');
              activeCounterRef.current.innerText = `SERVIÇO ${numStr} DE 09`;
            }

            // Sync progress bar colors
            progressBarsRef.current.forEach((bar, bIdx) => {
              if (!bar) return;
              if (bIdx < currentIdx) {
                bar.style.backgroundColor = 'rgba(196, 154, 82, 0.95)';
              } else if (bIdx === currentIdx) {
                bar.style.backgroundColor = 'rgba(228, 196, 119, 1)';
              } else {
                bar.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
              }
            });

            setActiveServiceIdx((prev) => (prev !== currentIdx ? currentIdx : prev));
          },
        },
      });

      // 3. BUILD SEAMLESS OVERLAPPING CROSSFADES (Card 0 -> 1 -> 2 ... -> 8)
      const stepDuration = 1.0;
      const holdDuration = 0.5;

      for (let i = 0; i < total - 1; i++) {
        const currentCard = cardsRef.current[i];
        const nextCard = cardsRef.current[i + 1];
        if (!currentCard || !nextCard) continue;

        const startTime = i * (stepDuration + holdDuration);

        // Hold current card steady and clear for reading
        tl.to({}, { duration: holdDuration }, startTime);

        const transitionStart = startTime + holdDuration;

        // Current Card exits
        tl.to(
          currentCard,
          {
            y: -24,
            z: -100,
            scale: 0.93,
            rotateX: -4,
            autoAlpha: 0,
            filter: 'blur(6px)',
            pointerEvents: 'none',
            zIndex: 15,
            duration: stepDuration,
            ease: 'power1.inOut',
          },
          transitionStart
        );

        // Next Card enters: OVERLAPS starting at transitionStart (ZERO GAP!)
        tl.fromTo(
          nextCard,
          {
            autoAlpha: 0,
            y: 30,
            z: -100,
            scale: 0.93,
            rotateX: 4,
            filter: 'blur(6px)',
            pointerEvents: 'none',
            zIndex: 25,
          },
          {
            autoAlpha: 1,
            y: 0,
            z: 0,
            scale: 1,
            rotateX: 0,
            filter: 'blur(0px)',
            pointerEvents: 'auto',
            zIndex: 30,
            duration: stepDuration,
            ease: 'power1.inOut',
          },
          transitionStart
        );

        // Light Sweep trigger on next card entering
        const sweepEl = sweepsRef.current[i + 1];
        if (sweepEl) {
          tl.fromTo(
            sweepEl,
            { x: '-100%', opacity: 0.9 },
            {
              x: '200%',
              opacity: 0,
              duration: stepDuration * 0.8,
              ease: 'power2.out',
            },
            transitionStart + 0.1
          );
        }
      }

      // 4. LAST CARD (SERVIÇO 09) FINAL HOLD
      const lastIndex = total - 1;
      const lastCard = cardsRef.current[lastIndex];
      const lastStartTime = (total - 1) * (stepDuration + holdDuration);

      tl.to({}, { duration: holdDuration * 1.5 }, lastStartTime);

      if (lastCard) {
        tl.to(
          lastCard,
          {
            scale: 0.98,
            opacity: 0.9,
            duration: 0.4,
            ease: 'power1.out',
          },
          lastStartTime + holdDuration * 1.5
        );
      }
    }, section);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="atuacao"
      className="relative w-full bg-[#050505] text-[#FFFFFF]"
    >
      {/* Pinned Stage Viewport Container */}
      <div
        ref={pinContainerRef}
        className="services-pin w-full h-screen min-h-[600px] max-h-screen flex flex-col justify-center items-center py-4 sm:py-6 px-4 sm:px-6 md:px-8 relative select-none overflow-hidden"
      >
        {/* Background Ambient Atmospheric Glows */}
        <div
          className="absolute pointer-events-none rounded-full blur-[140px] opacity-20 -z-10"
          style={{
            top: '35%',
            left: '25%',
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle, rgba(196, 154, 82, 0.25) 0%, rgba(196, 154, 82, 0.04) 60%, transparent 80%)',
          }}
        />
        <div
          className="absolute pointer-events-none rounded-full blur-[120px] opacity-15 -z-10"
          style={{
            bottom: '15%',
            right: '20%',
            width: '440px',
            height: '440px',
            background:
              'radial-gradient(circle, rgba(0, 102, 204, 0.2) 0%, transparent 75%)',
          }}
        />

        {/* SECTION HEADER: ALWAYS VISIBLE AND PINNED */}
        <div className="w-full max-w-4xl mx-auto mb-3 sm:mb-4 text-center relative z-20 shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-[#C49A52]/30 bg-black/70 backdrop-blur-md mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E4C477]" />
            <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] uppercase text-[#E4C477]">
              ATUAÇÃO 360°
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#FFFFFF] leading-tight tracking-tight">
            Uma visão 360° do negócio.
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-light mt-0.5 max-w-lg mx-auto">
            Da compreensão profunda da organização à estruturação e execução das soluções.
          </p>

          {/* 9-Segment Institutional Progress Line - Clickable */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-2.5 max-w-xs sm:max-w-md mx-auto">
            {SERVICES_360.map((srv, idx) => (
              <button
                key={srv.id}
                type="button"
                onClick={() => selectService(idx)}
                ref={(el) => (progressBarsRef.current[idx] = el)}
                className="flex-1 h-[3px] sm:h-[4px] rounded-full transition-all duration-300 bg-white/10 hover:bg-[#E4C477]/60 cursor-pointer focus:outline-none"
                title={`Serviço ${srv.number}: ${srv.title}`}
                aria-label={`Ver serviço ${srv.number}: ${srv.title}`}
              />
            ))}
          </div>
        </div>

        {/* 3D PERSPECTIVE STAGE CONTAINER WITH RESPONSIVE PROPORTIONS */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-3xl lg:max-w-4xl mx-auto h-[380px] sm:h-[390px] md:h-[400px] max-h-[58vh] flex items-center justify-center z-10 shrink-0"
          style={{
            perspective: '1200px',
          }}
        >
          {/* Micro-tilt Stage Layer */}
          <div
            ref={tiltStageRef}
            className="relative w-full h-full flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* 3D BACKGROUND STACK PLATE 2 (+2 ahead) */}
            {activeServiceIdx + 2 < SERVICES_360.length && (
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-sm border border-white/[0.04] bg-[#0A0A0A]/40 pointer-events-none select-none"
                style={{
                  transform: 'translate3d(0, 16px, -80px) scale(0.95)',
                  opacity: 0.08,
                  zIndex: 5,
                }}
              />
            )}

            {/* 3D BACKGROUND STACK PLATE 1 (+1 ahead) */}
            {activeServiceIdx + 1 < SERVICES_360.length && (
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-sm border border-[#C49A52]/20 bg-gradient-to-b from-white/[0.02] to-black/80 pointer-events-none select-none shadow-2xl backdrop-blur-sm"
                style={{
                  transform: 'translate3d(0, 8px, -40px) scale(0.98)',
                  opacity: 0.2,
                  zIndex: 8,
                }}
              />
            )}

            {/* 9 SELF-CONTAINED INTERACTIVE 3D SERVICE CARDS */}
            {SERVICES_360.map((service, idx) => (
              <div
                key={service.id}
                ref={(el) => (cardsRef.current[idx] = el)}
                className={`absolute inset-0 w-full h-full rounded-sm bg-gradient-to-b from-[#121212] via-[#0C0C0C] to-[#060606] border border-white/[0.12] hover:border-[#C49A52]/50 p-4 sm:p-6 md:p-7 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-[border-color] duration-500 overflow-hidden flex flex-col justify-between ${
                  idx === 0 ? 'opacity-100 z-30 pointer-events-auto' : 'opacity-0 z-10 pointer-events-none'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  willChange: 'transform, opacity, filter',
                }}
              >
                {/* Gold Light Sweep Bar */}
                <div
                  ref={(el) => (sweepsRef.current[idx] = el)}
                  className="absolute -top-[1px] -left-full w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#F3E5C8] to-transparent pointer-events-none z-30"
                />

                {/* Inner Glows */}
                <div className="absolute top-0 right-0 w-60 h-60 bg-[#C49A52]/[0.05] rounded-full blur-3xl pointer-events-none -z-10" />
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="flex-1 flex flex-col justify-start">
                  {/* 1. TOP BAR: DYNAMIC COUNTER & CATEGORY TAG */}
                  <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/[0.08] mb-3 sm:mb-4">
                    {/* Left: Indicator */}
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E4C477] shadow-[0_0_8px_#E4C477]" />
                      <span
                        ref={idx === activeServiceIdx ? activeCounterRef : undefined}
                        className="font-mono text-[11px] sm:text-xs font-semibold text-[#E4C477] tracking-[0.18em] uppercase"
                      >
                        SERVIÇO {service.number} DE 09
                      </span>
                    </div>

                    {/* Right: Category Tag */}
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase text-[#E4C477] bg-[#E4C477]/10 border border-[#E4C477]/30">
                      {service.category}
                    </span>
                  </div>

                  {/* 2. HEADLINE */}
                  <div className="overflow-hidden mb-2 sm:mb-2.5">
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-[#FFFFFF] leading-[1.2] tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* 3. DESCRIPTION */}
                  <p className="text-xs sm:text-sm md:text-[15px] text-white/80 font-light leading-relaxed max-w-2xl mb-3 sm:mb-4">
                    {service.description}
                  </p>

                  {/* 4. MICRO-HIGHLIGHTS (3 PILLS) */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {service.highlights.map((item, hIdx) => (
                      <div
                        key={`${service.id}-hl-${hIdx}`}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-white/[0.03] border border-white/[0.08] hover:border-[#C49A52]/40 transition-colors duration-300"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#E4C477]" />
                        <span className="text-[11px] font-mono text-white/90 tracking-wide">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. CARD FOOTER WITH ACTION & QUICK SWITCH BUTTONS */}
                <div className="pt-3 sm:pt-3.5 border-t border-white/[0.08] flex items-center justify-between gap-3 mt-2 shrink-0">
                  <div className="flex items-center gap-2 sm:gap-3 text-[11px] font-mono text-white/60">
                    <button
                      type="button"
                      disabled={idx === 0}
                      onClick={() => selectService(idx - 1)}
                      className="px-2.5 py-1 rounded-sm border border-white/10 hover:border-[#C49A52]/50 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all"
                    >
                      ← Anterior
                    </button>
                    <span>{idx + 1} / {SERVICES_360.length}</span>
                    <button
                      type="button"
                      disabled={idx === SERVICES_360.length - 1}
                      onClick={() => selectService(idx + 1)}
                      className="px-2.5 py-1 rounded-sm border border-white/10 hover:border-[#C49A52]/50 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all"
                    >
                      Próximo →
                    </button>
                  </div>
                  <a
                    href="mailto:contato@superin.com"
                    className="group inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#E4C477] hover:text-[#FFFFFF] uppercase tracking-wider transition-colors duration-300"
                  >
                    <span>Estruturar com a 8C</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

