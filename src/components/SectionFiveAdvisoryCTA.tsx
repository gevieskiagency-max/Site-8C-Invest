import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

interface SectionFiveAdvisoryCTAProps {
  id?: string;
  className?: string;
}

export const SectionFiveAdvisoryCTA = React.forwardRef<HTMLDivElement, SectionFiveAdvisoryCTAProps>(
  ({ id = 'contato', className = '' }, ref) => {
    return (
      <div id={id} ref={ref} className={`relative w-full text-[#FFFFFF] ${className}`}>
        {/* ======================================================== */}
        {/* 1. OS QUATRO VERBOS DA TRANSFORMAÇÃO                     */}
        {/* ======================================================== */}
        <section className="relative w-full py-28 sm:py-36 bg-[#040404] border-t border-white/10 overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] uppercase text-[#E4C477] block mb-12">
              CICLO DE VALORIZAÇÃO
            </span>

            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <span className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white/40 hover:text-white transition-colors duration-300">
                DIAGNOSTICAR.
              </span>
              <span className="text-[#C49A52] text-xl sm:text-2xl font-mono">↓</span>

              <span className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white/60 hover:text-white transition-colors duration-300">
                ESTRUTURAR.
              </span>
              <span className="text-[#C49A52] text-xl sm:text-2xl font-mono">↓</span>

              <span className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white/80 hover:text-white transition-colors duration-300">
                EXECUTAR.
              </span>
              <span className="text-[#C49A52] text-xl sm:text-2xl font-mono">↓</span>

              <span className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#C49A52] via-[#E4C477] to-[#B88A43] bg-clip-text text-transparent">
                VALORIZAR.
              </span>
              <span className="text-[#C49A52] text-xl sm:text-2xl font-mono">↓</span>

              <div className="pt-4">
                <span className="font-cinzel text-2xl sm:text-3xl font-black tracking-[0.25em] text-[#FFFFFF]">
                  8C INVE<span className="text-[#C49A52]">$</span>T.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 2. CTA FINAL EXCLUSIVO (MAILTO:CONTATO@SUPERIN.COM)      */}
        {/* ======================================================== */}
        <section className="relative w-full py-28 sm:py-36 px-6 sm:px-8 max-w-5xl mx-auto text-center border-t border-white/10">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-radial from-[#C49A52]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C49A52]/30 bg-black/50 backdrop-blur-md mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E4C477]" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#E4C477]">
                CONTATO INSTITUCIONAL
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#FFFFFF] leading-tight mb-6">
              A próxima fase da sua empresa <br />
              <span className="bg-gradient-to-r from-[#C49A52] via-[#E4C477] to-[#B88A43] bg-clip-text text-transparent font-semibold">
                começa com uma decisão.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              Capital, estratégia, governança e gestão trabalhando juntos para construir empresas mais fortes e gerar valor.
            </p>

            <div className="flex flex-col items-center gap-4">
              {/* Main Button */}
              <a
                href="mailto:contato@superin.com"
                id="final-cta-btn"
                className="group h-[56px] px-10 rounded-full bg-gradient-to-r from-[#C49A52] via-[#E4C477] to-[#8D642C] text-black font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:brightness-105 hover:shadow-[0_0_30px_rgba(196,154,82,0.4)] transition-all duration-300 active:scale-[0.98]"
              >
                <span>FALE COM A 8C INVEST</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* Clickable Email Subtext */}
              <a
                href="mailto:contato@superin.com"
                className="inline-flex items-center gap-2 text-sm font-mono text-white/60 hover:text-[#E4C477] transition-colors mt-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#C49A52]" />
                <span>contato@superin.com</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
);

SectionFiveAdvisoryCTA.displayName = 'SectionFiveAdvisoryCTA';
