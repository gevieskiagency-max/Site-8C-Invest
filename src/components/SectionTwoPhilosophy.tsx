import React from 'react';
import { 
  Sparkles
} from 'lucide-react';
import { AzaStrategicPartnershipSection } from './AzaStrategicPartnershipSection';
import { Diagnostico360ScrollSection } from './Diagnostico360ScrollSection';

interface SectionTwoPhilosophyProps {
  id?: string;
  className?: string;
}

export const SectionTwoPhilosophy = React.forwardRef<HTMLDivElement, SectionTwoPhilosophyProps>(
  ({ id = 'sobre', className = '' }, ref) => {
    return (
      <div id={id} ref={ref} className={`relative w-full text-[#FFFFFF] ${className}`}>
        {/* ======================================================== */}
        {/* 1. SOBRE A 8C                                            */}
        {/* ======================================================== */}
        <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto flex flex-col justify-center">
          {/* Watermark */}
          <div
            className="absolute top-12 left-0 pointer-events-none select-none z-0 overflow-hidden w-full whitespace-nowrap opacity-[0.03]"
            aria-hidden="true"
          >
            <span className="font-cinzel text-[14vw] font-black tracking-tighter text-[#c5a059]">
              ESTRUTURA
            </span>
          </div>

          <div className="relative z-10 max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C49A52]/30 bg-black/50 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E4C477]" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#E4C477]">
                SOBRE A 8C
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] text-[#FFFFFF] tracking-tight mb-6">
              Estrutura para transformar <br />
              <span className="bg-gradient-to-r from-[#C49A52] via-[#E4C477] to-[#B88A43] bg-clip-text text-transparent">
                desafios em crescimento.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-6">
              A 8C Invest atua na estruturação, transformação e valorização de empresas, integrando capital, estratégia, governança e gestão para transformar desafios empresariais em oportunidades concretas de crescimento.
            </p>

            <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
              Com uma equipe diretiva multidisciplinar e experiência executiva em grandes organizações e projetos de diferentes segmentos, a 8C combina visão estratégica, disciplina financeira, gestão orientada a resultados e inteligência de mercado para apoiar empresas em momentos decisivos de sua trajetória.
            </p>
          </div>

          {/* Core Integration Pillars */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 pt-4 border-t border-white/10">
            {[
              { label: 'CAPITAL', desc: 'Estruturação & Captação' },
              { label: 'ESTRATÉGIA', desc: 'Visão & Direcionamento' },
              { label: 'GOVERNANÇA', desc: 'Processos & Controles' },
              { label: 'GESTÃO', desc: 'Execução & Disciplina' },
              { label: 'EXECUÇÃO', desc: 'Construção Lado a Lado' },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-sm bg-white/[0.02] border border-white/10 hover:border-[#C49A52]/50 transition-all backdrop-blur-md"
              >
                <span className="block font-cinzel text-xs sm:text-sm font-bold tracking-wider text-[#E4C477] mb-1">
                  {p.label}
                </span>
                <span className="block text-[11px] text-white/50 font-light">
                  {p.desc}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 2. FRASE INSTITUCIONAL EDITORIAL (EDITORIAL HERO MOMENT) */}
        {/* ======================================================== */}
        <section className="relative w-full py-28 sm:py-36 bg-gradient-to-b from-[#050505] via-[#080808] to-[#050505] border-y border-white/5 overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-white/60 font-light leading-snug mb-4">
              Não chegamos para substituir pessoas.
            </p>
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#FFFFFF] mb-8">
              Chegamos para <span className="text-[#E4C477]">potencializar talentos</span>.
            </p>
            <div className="w-12 h-[1px] bg-[#C49A52] mx-auto mb-8 opacity-60" />
            <p className="text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
              Estruturar a gestão e construir, junto com a equipe, empresas mais fortes, eficientes, competitivas e preparadas para crescer.
            </p>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. PROPÓSITO & VISÃO                                     */}
        {/* ======================================================== */}
        <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Propósito */}
            <div className="p-8 sm:p-10 rounded-sm bg-white/[0.02] border border-white/10 hover:border-[#C49A52]/40 transition-all backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C49A52]/20 bg-black/40 text-[10px] font-mono tracking-widest text-[#E4C477] uppercase mb-6">
                  NOSSO PROPÓSITO
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FFFFFF] mb-6 leading-tight">
                  Transformar empresas em organizações de alto valor.
                </h3>
                <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed mb-6">
                  Criamos as condições estruturais e estratégicas para que negócios alcancem solidez operacional, maturidade de governança e atratividade para investidores.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10 text-xs font-mono text-[#E4C477]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4C477]" />
                  <span>CAPITAL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4C477]" />
                  <span>ESTRATÉGIA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4C477]" />
                  <span>GOVERNANÇA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4C477]" />
                  <span>GESTÃO</span>
                </div>
              </div>
            </div>

            {/* Visão */}
            <div className="p-8 sm:p-10 rounded-sm bg-white/[0.02] border border-white/10 hover:border-[#C49A52]/40 transition-all backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C49A52]/20 bg-black/40 text-[10px] font-mono tracking-widest text-[#E4C477] uppercase mb-6">
                  NOSSA VISÃO
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FFFFFF] mb-6 leading-tight">
                  Plataforma de referência em estruturação e crescimento.
                </h3>
                <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed mb-6">
                  Ser reconhecida como uma das principais plataformas de estruturação de negócios e investimentos estratégicos, conectando empresas a conhecimento, capital, tecnologia, gestão e oportunidades de crescimento.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-white/10 text-xs text-white/50 font-light">
                <Sparkles className="w-4 h-4 text-[#E4C477] shrink-0" />
                <span>Conexão contínua entre governança, capital e resultados concretos.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. ATUAÇÃO 360° & SERVIÇOS OFICIAIS (SCROLL 3D PINNED)   */}
        {/* ======================================================== */}
        <Diagnostico360ScrollSection />

        {/* ======================================================== */}
        {/* 5. PARCERIA ESTRATÉGICA: 8C INVEST × AZA PARTNERS        */}
        {/* ======================================================== */}
        <AzaStrategicPartnershipSection />
      </div>
    );
  }
);

SectionTwoPhilosophy.displayName = 'SectionTwoPhilosophy';
