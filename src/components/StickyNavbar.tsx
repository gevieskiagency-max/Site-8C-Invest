import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronRight, Mail } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface StickyNavbarProps {
  currentSection?: number;
}

const NAV_LINKS = [
  { label: 'Início', href: '#hero-section', id: 'hero-section' },
  { label: 'A 8C', href: '#sobre', id: 'sobre' },
  { label: 'Atuação 360°', href: '#atuacao', id: 'atuacao' },
  { label: 'Metodologia', href: '#metodologia', id: 'metodologia' },
  { label: 'Experiência', href: '#experiencia', id: 'experiencia' },
  { label: 'Liderança', href: '#lideranca', id: 'lideranca' },
  { label: 'Contato', href: '#contato', id: 'contato' },
];

export const StickyNavbar: React.FC<StickyNavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const elem = document.getElementById(targetId);
    if (elem) {
      const navOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.7)] py-3 sm:py-3.5'
            : 'bg-transparent py-5 sm:py-7 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo with Brand typography and fallback */}
          <BrandLogo
            size={scrolled ? 'sm' : 'md'}
            onClick={(e) => scrollToSection(e, 'hero-section')}
          />

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-8 text-[11px] xl:text-xs uppercase tracking-[0.16em] font-medium"
            aria-label="Navegação Principal"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.id)}
                className="relative text-[#FFFFFF]/70 hover:text-[#FFFFFF] hover:drop-shadow-[0_0_8px_rgba(228,196,119,0.5)] transition-all duration-300 py-1 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#C49A52] to-[#E4C477] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:contato@superin.com"
              id="sticky-nav-cta-btn"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C49A52] via-[#E4C477] to-[#8D642C] text-black font-semibold text-xs tracking-wider uppercase hover:brightness-105 hover:shadow-[0_0_20px_rgba(196,154,82,0.35)] transition-all duration-300 active:scale-[0.98]"
            >
              <span>Fale com a 8C</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-sm border border-white/15 bg-black/60 text-white/90 hover:text-white hover:border-[#C49A52]/50 transition-all focus:outline-none"
              aria-label="Menu de Navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 lg:hidden animate-fade-in">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <BrandLogo size="sm" onClick={(e) => scrollToSection(e, 'hero-section')} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white focus:outline-none"
              aria-label="Fechar Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex flex-col gap-4 sm:gap-5 py-6 text-sm sm:text-base uppercase tracking-widest font-light">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-white/80 hover:text-[#E4C477] transition-colors flex items-center justify-between py-2 border-b border-white/[0.04]"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#C49A52]" />
              </a>
            ))}
          </nav>

          {/* Drawer Footer Contact */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <a
              href="mailto:contato@superin.com"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#C49A52] via-[#E4C477] to-[#8D642C] text-black font-bold text-center text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(196,154,82,0.3)]"
            >
              <span>Fale com a 8C</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:contato@superin.com"
              className="inline-flex items-center justify-center gap-2 text-xs font-mono text-white/60 hover:text-[#E4C477] text-center"
            >
              <Mail className="w-3.5 h-3.5 text-[#C49A52]" />
              <span>contato@superin.com</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
