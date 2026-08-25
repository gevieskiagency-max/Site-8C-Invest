import React, { useRef, useEffect } from 'react';
import { Shield, Globe, Award, ChevronRight, CheckCircle2 } from 'lucide-react';
import parceriaEstrategicaImg from '../assets/images/parceria_estrategica.png';
import azaPartnershipVideoSrc from '../assets/videos/Animate_image_with_looping_effect_202608241844.mp4';

export const AzaStrategicPartnershipSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      video.play().catch(() => {
        const onInteract = () => {
          video.play().catch(() => {});
          ['click', 'touchstart', 'scroll', 'keydown'].forEach((evt) =>
            window.removeEventListener(evt, onInteract)
          );
        };
        ['click', 'touchstart', 'scroll', 'keydown'].forEach((evt) =>
          window.addEventListener(evt, onInteract, { once: true, passive: true })
        );
      });
    };

    if (video.readyState >= 1) {
      playVideo();
    } else {
      video.addEventListener('loadeddata', playVideo, { once: true });
      video.addEventListener('canplay', playVideo, { once: true });
    }

    video.load();
  }, []);

  return (
    <section id="parceria-aza" className="relative w-full py-24 sm:py-32 px-6 sm:px-8 border-t border-white/10 bg-[#050505] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-[#C49A52]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 rounded-full bg-[#E4C477]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header Badge */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C49A52]/30 bg-black/60 backdrop-blur-md mb-4">
            <Globe className="w-3.5 h-3.5 text-[#E4C477]" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#E4C477]">
              ALIANÇA GLOBAL ESTRATÉGICA
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white tracking-tight">
            8C Inve$t & <span className="bg-gradient-to-r from-[#C49A52] via-[#E4C477] to-[#B88A43] bg-clip-text text-transparent">AZA Partners</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-3xl font-light leading-relaxed">
            Conectando empresas a uma rede global de capital institucional, advisory em transações complexas e expansão internacional.
          </p>
        </div>

        {/* Grid: Video + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Showcase Card */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#C49A52]/20 bg-gradient-to-b from-white/[0.04] to-black/80 shadow-2xl group">
            <div className="aspect-[16/9] sm:aspect-[4/3] relative w-full overflow-hidden bg-black flex items-center justify-center">
              <video
                ref={videoRef}
                src={azaPartnershipVideoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={parceriaEstrategicaImg}
                className="w-full h-full object-cover select-none"
              >
                <source src={azaPartnershipVideoSrc} type="video/mp4" />
                <source src="/aza_partnership_video.mp4" type="video/mp4" />
              </video>

              {/* Glass overlay border */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
            </div>

            <div className="p-6 border-t border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#E4C477]">M&A & Advisory Global</p>
                <p className="text-sm text-white/90 font-medium">Estruturação de Transações Internacionais</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-[#C49A52]/40 bg-[#C49A52]/10 flex items-center justify-center text-[#E4C477]">
                <Shield className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Details & Strategic Scope */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Fusões & Aquisições (M&A)',
                  desc: 'Coordenação integral de processos de compra, venda, fusão e joint ventures.',
                  icon: Award
                },
                {
                  title: 'Acesso a Fundos Globais',
                  desc: 'Conexão direta com fundos soberanos, private equity e family offices globais.',
                  icon: Globe
                }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#C49A52]/40 transition-all backdrop-blur-sm"
                  >
                    <IconComponent className="w-6 h-6 text-[#E4C477] mb-3" />
                    <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Strategic Bullets */}
            <div className="p-6 rounded-xl border border-[#C49A52]/20 bg-gradient-to-r from-[#C49A52]/10 to-transparent">
              <h4 className="text-sm font-semibold text-white mb-3">Diferenciais da Aliança</h4>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E4C477] shrink-0" />
                  Presença estratégica nos principais hubs financeiros mundiais
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E4C477] shrink-0" />
                  Due diligence executiva e alinhamento de governança pré-deal
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E4C477] shrink-0" />
                  Maximização do valuation por meio de teses consistentes de crescimento
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <a
                href="#concierge"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#C49A52] via-[#E4C477] to-[#B88A43] text-black font-semibold text-sm hover:shadow-[0_0_25px_rgba(228,196,119,0.35)] transition-all"
              >
                <span>Apresentar Oportunidade à 8C & AZA</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
