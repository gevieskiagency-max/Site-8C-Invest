import React from 'react';
import { ArrowUp, Mail, Shield } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const FooterInstitutional = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="relative w-full bg-[#030303] text-white/60 pt-20 pb-12 px-6 sm:px-8 border-t border-white/10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#C49A52]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <BrandLogo size="md" showSubtitle />
              </div>

              <p className="text-sm text-white/60 leading-relaxed max-w-sm font-light mb-6">
                Estruturação, transformação e valorização empresarial. Integrando capital, estratégia, governança e gestão para gerar valor concreto e sustentável.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#E4C477]">
              <span>8C INVE$T</span>
              <span>·</span>
              <span>BUSINESS FOUND</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-xs uppercase tracking-widest text-[#FFFFFF] mb-6 font-semibold">
              Navegação
            </h4>
            <ul className="space-y-3 text-xs tracking-wider">
              <li>
                <a href="#hero-section" className="hover:text-[#E4C477] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#E4C477] transition-colors">
                  A 8C
                </a>
              </li>
              <li>
                <a href="#atuacao" className="hover:text-[#E4C477] transition-colors">
                  Atuação & Serviços
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-[#E4C477] transition-colors">
                  Metodologia (Os 8Cs)
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-[#E4C477] transition-colors">
                  Experiência & Organizações
                </a>
              </li>
              <li>
                <a href="#lideranca" className="hover:text-[#E4C477] transition-colors">
                  Corpo Diretivo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-xs uppercase tracking-widest text-[#FFFFFF] mb-6 font-semibold">
                Contato Direto
              </h4>
              <p className="text-xs text-white/50 leading-relaxed mb-4 font-light">
                Para consultas executivas, parcerias e estruturação de novos projetos:
              </p>
              <a
                href="mailto:contato@superin.com"
                className="inline-flex items-center gap-2 text-sm font-mono text-[#E4C477] hover:underline mb-6"
              >
                <Mail className="w-4 h-4" />
                <span>contato@superin.com</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              id="footer-scroll-top-btn"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#E4C477] hover:text-[#FFFFFF] tracking-widest uppercase py-2.5 px-4 rounded-sm border border-white/10 hover:border-[#C49A52]/40 transition-colors w-fit"
            >
              <span>Retornar ao Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <p>© 2026 8C Inve$t. Todos os direitos reservados. Estruturação e Valorização Empresarial.</p>
          <div className="flex items-center gap-4">
            <span>Privacidade & Governança</span>
            <span>·</span>
            <span>contato@superin.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
