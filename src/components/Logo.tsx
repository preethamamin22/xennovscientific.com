import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'image';
  size?: 'sm' | 'md' | 'lg';
}

export const LogoIcon: React.FC<{ className?: string; inverted?: boolean }> = ({
  className = 'w-9 h-9',
  inverted = false
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Teardrop / Droplet */}
      <path
        d="M50 12 C48 15 28 42 28 58 C28 71 38 80 50 80 C62 80 72 71 72 58 C72 42 52 15 50 12 Z"
        fill="#0E7E77"
      />
      {/* Inner highlight arc on bottom right */}
      <path
        d="M62 52 C65 57 64 64 59 69"
        stroke="#FFFFFF"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Cradle / Tray base */}
      <path
        d="M16 75 L24 88 C25.5 90.5 28 92 32 92 L68 92 C72 92 74.5 90.5 76 88 L84 75"
        stroke={inverted ? '#FFFFFF' : '#0B2341'}
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md'
}) => {
  // If variant is 'image' or 'light' (on white header), we use the official high-res logo image
  if (variant === 'light' || variant === 'image') {
    const heightClass = size === 'sm' ? 'h-8 sm:h-9' : size === 'lg' ? 'h-12 sm:h-14' : 'h-9 sm:h-10';
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src="/xennov-logo.jpg"
          alt="XenNov Scientific"
          className={`${heightClass} w-auto object-contain block`}
          loading="eager"
        />
      </div>
    );
  }

  // Dark variant (for Footer and dark backgrounds)
  const iconSizeClass = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-11 h-11' : 'w-9 h-9';
  const titleSizeClass = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subSizeClass = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[10px]';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon className={`${iconSizeClass} shrink-0`} inverted={true} />
      <div className="flex flex-col text-left">
        <div className="flex items-start">
          <span className={`${titleSizeClass} font-black tracking-tight text-white leading-none`}>
            XenNov
          </span>
          <span className="text-[10px] font-bold text-slate-400 ml-0.5 leading-none">
            &trade;
          </span>
        </div>
        <span className={`${subSizeClass} font-bold tracking-[0.28em] text-slate-300 uppercase leading-none mt-1`}>
          SCIENTIFIC
        </span>
      </div>
    </div>
  );
};
