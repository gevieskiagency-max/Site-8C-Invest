import React, { useState } from 'react';
import officialLogoMark from '../assets/images/logo_8c_brand_mark.jpg';

interface BrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showSubtitle = false,
  size = 'md',
  href = '#hero-section',
  onClick,
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  const imgHeight = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-10 md:h-11',
    lg: 'h-12 sm:h-14',
  }[size];

  const titleSize = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
  }[size];

  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center gap-3 group cursor-pointer select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C49A52] ${className}`}
      aria-label="8C Inve$t - Business Found"
    >
      {/* Luxury Brand Crest / Emblem */}
      <div className={`relative ${imgHeight} aspect-square flex-shrink-0 flex items-center justify-center rounded-sm overflow-hidden border border-[#C49A52]/50 bg-gradient-to-br from-[#18140c] via-[#0d0c08] to-[#050505] shadow-[0_0_12px_rgba(196,154,82,0.2)] group-hover:border-[#E4C477] group-hover:shadow-[0_0_20px_rgba(228,196,119,0.4)] transition-all duration-300`}>
        <div className="flex flex-col items-center justify-center p-1">
          <span className="font-cinzel text-xs sm:text-sm font-black bg-gradient-to-r from-[#C49A52] via-[#F3E5C8] to-[#B88A43] bg-clip-text text-transparent tracking-wider leading-none">
            8C
          </span>
          <div className="w-3.5 h-[1px] bg-gradient-to-r from-transparent via-[#E4C477] to-transparent mt-1" />
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-cinzel ${titleSize} font-bold tracking-[0.16em] text-[#FFFFFF] group-hover:text-[#FFFFFF]/90 transition-colors`}>
            8C INVE<span className="bg-gradient-to-r from-[#C49A52] via-[#E4C477] to-[#B88A43] bg-clip-text text-transparent font-black">$</span>T
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-[#C49A52]/80 uppercase mt-1">
            BUSINESS FOUND
          </span>
        )}
      </div>
    </a>
  );
};
