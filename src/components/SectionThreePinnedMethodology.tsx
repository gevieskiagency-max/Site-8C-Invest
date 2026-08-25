import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Award, 
  Flame, 
  Building, 
  TrendingUp, 
  Gem, 
  Repeat
} from 'lucide-react';
import { EightCItem } from '../types';

const EIGHT_CS: { number: string; name: string; description: string; icon: any }[] = [
  {
    number: '01',
    name: 'CONFIANÇA',
    description: 'Relações transparentes e compromisso incondicional com a verdade do negócio e o alinhamento de longo prazo.',
    icon: ShieldCheck,
  },
  {
    number: '02',
    name: 'COLABORAÇÃO',
    description: 'Atuação lado a lado com fundadores, executivos e times para desenhar e executar soluções integradas.',
    icon: Users,
  },
  {
    number: '03',
    name: 'COMPETÊNCIA',
    description: 'Experiência executiva prática acumulada em grandes corporações, reestruturações e projetos complexos.',
    icon: Award,
  },
  {
    number: '04',
    name: 'CORAGEM',
    description: 'Firmeza para diagnosticar a realidade, tomar decisões difíceis e implementar as mudanças necessárias.',
    icon: Flame,
  },
  {
    number: '05',
    name: 'GOVERNANÇA',
    description: 'Estruturação de processos, papéis claros, indicadores de controle e tomada de decisão colegiada.',
    icon: Building,
  },
  {
    number: '06',
    name: 'RESULTADOS',
    description: 'Foco incansável em eficiência operacional, disciplina de caixa, retorno sobre capital e rentabilidade sustentável.',
    icon: TrendingUp,
  },
  {
    number: '07',
    name: 'VALOR',
    description: 'Elevação do valor intrínseco e da atratividade estratégica da empresa para stakeholders e investidores.',
    icon: Gem,
  },
  {
    number: '08',
    name: 'CONTINUIDADE',
    description: 'Preparação do ecossistema e das lideranças para que o crescimento sustentável prossiga com solidez.',
    icon: Repeat,
  },
];

interface SectionThreePinnedMethodologyProps {
  id?: string;
  className?: string;
  activeStep?: number;
  stepProgress?: number;
  onStepChange?: (step: number) => void;
}

export const SectionThreePinnedMethodology = React.forwardRef<
  HTMLDivElement,
  SectionThreePinnedMethodologyProps
>(({ id = 'metodologia', className = '', activeStep = 0, onStepChange }, ref) => {
  const [selectedC, setSelectedC] = useState<number>(0);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative min-h-screen w-full py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto flex flex-col justify-center text-[#FFFFFF] ${className}`}
    >
      {/* Watermark Background */}
      <div
        className="absolute top-1/4 left-0 pointer-events-none select-none z-0 overflow-hidden w-full whitespace-nowrap opacity-[0.03]"
        aria-hidden="true"
      >
        <span className="font-cinzel text-[16vw] font-black tracking-tighter text-[#c5a059]">
          METODOLOGIA
        </span>
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C49A52]/30 bg-black/50 backdrop-blur-md mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E4C477]" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#E4C477]">
            A 8C INVEST EM AÇÃO
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#FFFFFF] mb-4">
          Não entregamos apenas recomendações. <br />
          <span className="bg-gradient-to-r from-[#C49A52] via-[#E4C477] to-[#B88A43] bg-clip-text text-transparent font-semibold">
            Construímos junto.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
          Nossa metodologia começa pela compreensão profunda do negócio e evolui para a construção e implementação das soluções.
        </p>
      </div>

      {/* The 8Cs Full Matrix */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {EIGHT_CS.map((item, idx) => {
          const Icon = item.icon;
          const isHovered = selectedC === idx;
          return (
            <div
              key={item.number}
              onMouseEnter={() => setSelectedC(idx)}
              className={`p-6 rounded-sm border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                isHovered
                  ? 'bg-white/[0.06] border-[#C49A52] shadow-[0_0_15px_rgba(196,154,82,0.15)] -translate-y-0.5'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#E4C477] font-bold">
                    {item.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isHovered ? 'text-[#E4C477]' : 'text-white/40'}`} />
                </div>
                <h3 className="font-serif text-base font-bold text-[#FFFFFF] mb-2 tracking-wide">
                  {item.name}
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});

SectionThreePinnedMethodology.displayName = 'SectionThreePinnedMethodology';
