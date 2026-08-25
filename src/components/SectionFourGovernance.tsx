import React from 'react';
import { 
  Building, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  Globe, 
  Award,
  Layers,
  Sparkles,
  Users
} from 'lucide-react';
import trajetoriaExecutivaImg from '../assets/images/trajetoria_executiva.png';
import sociosImg from '../assets/images/chatgpt_image_socios.png';
import globeNetworkImg from '../assets/images/globe_network_gold_1787587210441.jpg';
import goldenWorldMapImg from '../assets/images/golden_world_map_1787587223243.jpg';

const LEADERS = [
  {
    name: 'CÉZAR',
    role: 'Presidente',
    focus: 'Capital & Turnaround',
    skills: [
      'Equity',
      'Gestão de recursos e capital',
      'M&A',
      'Gestão para resultados',
      'Turnaround',
      'Escalabilidade de projetos',
      'ROI',
      'Integração de ecossistemas',
      'Gestão de stakeholders',
    ],
  },
  {
    name: 'LUIZ FERNANDO',
    role: 'Inovação & Operações',
    focus: 'Tecnologia & Estratégia Digital',
    skills: [
      'Arquitetura de negócios',
      'Experiência e sucesso do cliente',
      'Melhoria de processos',
      'Tecnologia',
      'Inovação',
      'Branding',
      'Marketing',
      'Posicionamento digital',
      'Planejamento financeiro',
    ],
  },
  {
    name: 'HEBER SANCHES',
    role: 'Projetos & Comercial',
    focus: 'Operações & Grandes Contas',
    skills: [
      'Gestão de grandes contas',
      'Gerenciamento de projetos',
      'Desenvolvimento de produtos',
      'Fornecedores',
      'Estruturação documental',
      'Business Plans',
      'Gestão financeira',
      'Profit & Loss',
    ],
  },
];

const ORGANIZATIONS = [
  'Coca-Cola',
  'Grupo Pão de Açúcar',
  'Assaí',
  'Walmart',
  'Grupo Muffato',
  'Aker Solutions',
  'Delta',
  'Toyota',
  'Renault',
  'FORVIA / Faurecia',
];

interface SectionFourGovernanceProps {
  id?: string;
  className?: string;
}

export const SectionFourGovernance = React.forwardRef<HTMLDivElement, SectionFourGovernanceProps>(
  ({ id = 'experiencia', className = '' }, ref) => {
    return (
      <div id={id} ref={ref} className={`relative w-full text-[#FFFFFF] ${className}`}>
        {/* ======================================================== */}
        {/* 1. EXPERIÊNCIA EXECUTIVA & GRANDES ORGANIZAÇÕES          */}
        {/* ======================================================== */}
        <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C49A52]/30 bg-black/50 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E4C477]" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#E4C477]">
                EXPERIÊNCIA
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FFFFFF] leading-tight mb-4">
              Experiência prática de gestão aplicada à realidade empresarial.
            </h2>
            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
              A experiência executiva dos sócios reúne atuação em grandes organizações e projetos, gerando uma visão prática sobre gestão, operação, capital, transformação e crescimento empresarial.
            </p>
          </div>

          {/* Official Organizations Logowall Banner Asset */}
          <div className="relative rounded-sm bg-gradient-to-b from-white/[0.03] to-black/90 border border-white/15 p-8 sm:p-12 backdrop-blur-xl overflow-hidden shadow-2xl mb-12">
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-8">
                <div>
                  <span className="font-mono text-xs text-[#E4C477] uppercase tracking-widest block mb-1">
                    TRAJETÓRIA EXECUTIVA
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    Organizações em que nossos sócios atuaram
                  </h3>
                </div>
                <span className="text-xs font-mono text-white/50">
                  MULTISSETORIAL · ESCALA & GOVERNANÇA
                </span>
              </div>

              {/* Responsive Logowall Display */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-8">
                {ORGANIZATIONS.map((org, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-sm bg-black/60 border border-white/10 flex items-center justify-center text-center group hover:border-[#C49A52]/60 transition-all"
                  >
                    <span className="font-serif text-xs sm:text-sm font-semibold tracking-wide text-white/80 group-hover:text-[#E4C477] transition-colors">
                      {org}
                    </span>
                  </div>
                ))}
              </div>

              {/* Ambient visual banner */}
              <div className="relative rounded-sm overflow-hidden border border-white/10 bg-black">
                <img
                  src={trajetoriaExecutivaImg}
                  alt="Trajetória Executiva - Organizações em que nossos sócios atuaram"
                  className="w-full h-auto object-contain rounded-sm"
                />
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 2. DECLARAÇÃO DE AUTORIDADE EDITORIAL                    */}
          {/* ======================================================== */}
          <div className="relative my-16 p-8 sm:p-12 md:p-16 rounded-sm bg-[#080808] border border-[#C49A52]/30 shadow-2xl text-center">
            <div className="w-12 h-[1px] bg-[#C49A52] mx-auto mb-8 opacity-70" />
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-white/90 font-light leading-relaxed max-w-4xl mx-auto">
              “O que dá credibilidade à 8C Invest não é promessa, mas a trajetória dos seus sócios, que combina estruturação de capital e turnaround, gestão e operação de projetos em escala, disciplina financeira e construção e valorização de marcas.”
            </p>
            <div className="w-12 h-[1px] bg-[#C49A52] mx-auto mt-8 opacity-70" />
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. CORPO DIRETIVO OFICIAL                                */}
        {/* ======================================================== */}
        <section id="lideranca" className="relative w-full py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C49A52]/30 bg-black/50 backdrop-blur-md mb-6">
              <Users className="w-3.5 h-3.5 text-[#E4C477]" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#E4C477]">
                LIDERANÇA & CORPO DIRETIVO
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FFFFFF] leading-tight mb-4">
              Experiência executiva na tomada de decisões.
            </h2>
            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
              Liderança sênior presente em todas as fases do processo de diagnóstico, estruturação, governança e alocação de recursos.
            </p>
          </div>

          {/* Official Board Image Banner */}
          <div className="relative rounded-sm overflow-hidden border border-white/15 mb-12 shadow-2xl bg-black">
            <img
              src={sociosImg}
              alt="Sócios e Corpo Diretivo 8C Invest"
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-4 left-4 sm:left-6 z-10 flex items-center gap-3 bg-black/80 backdrop-blur-md px-4 py-2 rounded-sm border border-white/10">
              <span className="font-cinzel text-xs font-bold text-[#E4C477]">8C INVEST</span>
              <span className="text-white/40">|</span>
              <span className="text-[11px] font-mono text-white/80">CORPO DIRETIVO OFICIAL</span>
            </div>
          </div>

          {/* Leaders Profile Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERS.map((leader, idx) => (
              <div
                key={idx}
                className="p-7 rounded-sm bg-white/[0.02] border border-white/10 hover:border-[#C49A52]/50 transition-all duration-300 flex flex-col justify-between backdrop-blur-md"
              >
                <div>
                  <div className="pb-4 border-b border-white/10 mb-5">
                    <span className="font-mono text-xs text-[#E4C477] tracking-widest uppercase block mb-1">
                      {leader.role}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#FFFFFF]">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-white/50 font-light mt-1">
                      {leader.focus}
                    </p>
                  </div>

                  <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block mb-3">
                    ÁREAS DE ATUAÇÃO
                  </span>

                  <ul className="space-y-2">
                    {leader.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-xs text-white/75 font-light">
                        <span className="w-1 h-1 rounded-full bg-[#E4C477] shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. CAPITAL INTELIGENTE & MAPA-MÚNDI                      */}
        {/* ======================================================== */}
        <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
          <div className="relative rounded-sm bg-gradient-to-b from-white/[0.03] to-black/90 border border-white/15 p-8 sm:p-12 md:p-16 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* World Map Backdrop */}
            <div className="absolute inset-0 z-0 opacity-30 overflow-hidden">
              <img
                src={goldenWorldMapImg}
                alt="Mapa Mundi Conexões 8C Invest"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/90" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Narrative & CTA */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C49A52]/40 bg-black/60 text-[#E4C477] text-[10px] font-mono tracking-widest uppercase mb-6">
                  <Globe className="w-3.5 h-3.5" />
                  <span>CAPITAL INTELIGENTE</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FFFFFF] leading-tight mb-6">
                  Capital inteligente para empresas que <br />
                  <span className="bg-gradient-to-r from-[#C49A52] via-[#E4C477] to-[#B88A43] bg-clip-text text-transparent font-semibold">
                    querem avançar.
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light mb-8 max-w-xl">
                  A 8C Invest conecta estratégia, gestão e capital para empresas que precisam estruturar sua operação, superar desafios, captar recursos, melhorar sua performance ou preparar o negócio para uma nova fase de crescimento.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="mailto:contato@superin.com"
                    className="h-12 px-8 rounded-full bg-gradient-to-r from-[#C49A52] via-[#E4C477] to-[#8D642C] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 hover:shadow-[0_0_20px_rgba(196,154,82,0.35)] transition-all"
                  >
                    <span>Falar com a 8C</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </a>

                  <span className="text-xs font-mono text-white/50 text-center sm:text-left">
                    contato@superin.com
                  </span>
                </div>
              </div>

              {/* Right Column: Globe Asset */}
              <div className="lg:col-span-5 relative group rounded-sm overflow-hidden border border-[#C49A52]/30 shadow-2xl bg-black">
                <img
                  src={globeNetworkImg}
                  alt="Globo Corporativo 8C Invest"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white/70 bg-black/80 px-3 py-1.5 rounded backdrop-blur-md border border-white/10">
                  <span className="text-[#E4C477]">MERCADOS & OPORTUNIDADES</span>
                  <span>CONEXÕES GLOBAIS</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
);

SectionFourGovernance.displayName = 'SectionFourGovernance';
