import React from 'react';
import { BUSINESS_CONFIG } from '../../data/business';

interface LogoProps {
  variant?: 'light' | 'dark';
  logoImage?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  logoImage = '/images/sp-logo-3d.png',
  className = ''
}) => {
  const isLight = variant === 'light';

  return (
    <a
      href="#home"
      className={`inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-xl ${className}`}
      aria-label={`${BUSINESS_CONFIG.name} Home`}
    >
      <div className="relative flex items-center justify-center shrink-0 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white p-0.5 border border-amber-300/80 shadow-md group-hover:scale-105 transition-transform duration-300">
        <img
          src={logoImage}
          alt={`${BUSINESS_CONFIG.name} 3D Logo`}
          className="w-full h-full object-cover rounded-full"
          width="52"
          height="52"
        />
      </div>

      <div className="flex flex-col text-left">
        <span className={`font-black tracking-tight text-lg sm:text-xl leading-none ${isLight ? 'text-white' : 'text-slate-900'}`}>
          {BUSINESS_CONFIG.logoText}
        </span>
        <span className={`text-[10px] font-extrabold tracking-wider uppercase mt-1 ${isLight ? 'text-emerald-400' : 'text-emerald-800'}`}>
          {BUSINESS_CONFIG.logoSubtitle}
        </span>
      </div>
    </a>
  );
};
