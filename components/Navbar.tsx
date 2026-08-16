import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800/80 py-2.5 sm:py-3 shadow-lg shadow-black/20' 
          : 'bg-slate-950/50 backdrop-blur-sm py-3 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-3.5 sm:px-6 flex justify-between items-center">
        {/* Logo - Mobile: Only Cup Icon | Desktop/Tablet: Cup Icon + Text */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 sm:gap-3 select-none flex-shrink-0 group"
          title="Şifa Bardakta"
        >
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3504/3504837.png" 
            alt="Şifa Bardakta Logo" 
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:scale-105 transition-transform duration-200"
          />
          <span className="hidden sm:inline text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
            Şifa<span className="text-emerald-400">Bardakta</span>
          </span>
        </a>

        {/* Header Right Action Buttons */}
        <div className="flex items-center gap-1.5 min-[400px]:gap-2 sm:gap-4 flex-shrink-0">
          <a 
            href="privacy.html" 
            className="text-[11px] min-[380px]:text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-all px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg hover:bg-slate-800/70 border border-transparent hover:border-slate-700/50 whitespace-nowrap flex items-center gap-1"
          >
            <span>🔒</span>
            <span>Gizlilik & KVKK</span>
          </a>
          <a 
            href="delete-account.html" 
            className="text-[11px] min-[380px]:text-xs sm:text-sm font-semibold text-red-400 hover:text-red-300 transition-all px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg border border-red-500/30 hover:border-red-500/70 bg-red-500/10 hover:bg-red-500/20 whitespace-nowrap shadow-sm shadow-red-950/30 flex items-center gap-1"
          >
            <span>🗑️</span>
            <span>Hesap Silme Talebi</span>
          </a>
        </div>
      </div>
    </nav>
  );
};