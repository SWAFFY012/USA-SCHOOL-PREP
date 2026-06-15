import { ReactNode, HTMLAttributes, CSSProperties } from 'react';

interface GorillaGlassProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  isInteractive?: boolean;
  isSelected?: boolean;
  id?: string;
  style?: CSSProperties;
  key?: string | number;
  onClick?: any;
}

export default function GorillaGlass({
  children,
  className = '',
  isInteractive = false,
  isSelected = false,
  style = {},
  ...props
}: GorillaGlassProps) {
  return (
    <div
      className={`
        relative overflow-hidden
        motion-reveal
        backdrop-blur-2xl
        transition-all duration-300
        ${isInteractive ? 'cursor-pointer hover:scale-[1.02] active:scale-[0.99]' : ''}
        ${isSelected 
          ? 'bg-gold/[0.04] border-gold/40 shadow-[0_20px_50px_rgba(197,160,89,0.18),inset_0_1px_2px_rgba(255,255,255,0.2)]' 
          : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.05] hover:border-white/15 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)]'
        }
        ${className}
      `}
      style={{
        borderWidth: '1px',
        borderStyle: 'solid',
        ...style
      }}
      {...props}
    >
      {/* Gloss reflection overlay at the top */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.05] pointer-events-none" />
      
      {/* Fine inner highlights */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      
      {children}
    </div>
  );
}
