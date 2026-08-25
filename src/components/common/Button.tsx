import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className,
  asAnchor = false,
  href,
  target,
  rel,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 cursor-pointer';

  const variants = {
    primary: 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm hover:shadow active:bg-emerald-900',
    secondary: 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm hover:shadow active:bg-amber-800',
    outline: 'border-2 border-emerald-700 text-emerald-800 hover:bg-emerald-50 active:bg-emerald-100',
    ghost: 'text-slate-700 hover:text-emerald-800 hover:bg-slate-100'
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5'
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (asAnchor && href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
