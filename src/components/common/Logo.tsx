import React from 'react';
import { Truck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/business';

interface LogoProps {
  variant?: 'light' | 'dark';
  logoImage?: string; // Optional custom logo image URL/path
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', logoImage, className = '' }) => {
  const isLight = variant === 'light';

  return (
    <a
      href="#home"
      className={`inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg ${className}`}
      aria-label={`${BUSINESS_CONFIG.name} Home`}
    >
      {logoImage ? (
        <img
          src={logoImage}
          alt={BUSINESS_CONFIG.name}
          className="h-10 w-auto object-contain"
        />
      ) : (
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-800 text-white shadow-sm group-hover:bg-emerald-700 transition-colors shrink-0">
          <Truck className="w-5 h-5 text-amber-300" />
        </div>
      )}
      
      <div className="flex flex-col">
        <span className={`font-black tracking-tight text-lg leading-none ${isLight ? 'text-white' : 'text-slate-900'}`}>
          {BUSINESS_CONFIG.logoText}
        </span>
        <span className={`text-[10px] font-bold tracking-wider uppercase mt-1 ${isLight ? 'text-emerald-300' : 'text-emerald-700'}`}>
          {BUSINESS_CONFIG.logoSubtitle}
        </span>
      </div>
    </a>
  );
};
