import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800 py-3' : 'bg-slate-950/40 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 select-none">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3504/3504837.png" 
            alt="Şifa Bardakta Logo" 
            className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]"
          />
          <span className="text-xl font-bold tracking-tight text-white">
            Şifa<span className="text-emerald-400">Bardakta</span>
          </span>
        </div>

        {/* Header Right Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a 
            href="privacy.html" 
            className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors px-3 py-2 rounded-lg hover:bg-slate-800/60"
          >
            🔒 Gizlilik & KVKK
          </a>
          <a 
            href="delete-account.html" 
            className="text-xs sm:text-sm font-semibold text-red-400 hover:text-red-300 transition-colors px-3 py-2 rounded-lg border border-red-500/40 hover:border-red-500/80 bg-red-500/10 hover:bg-red-500/25"
          >
            🗑️ Hesap Silme Talebi
          </a>
        </div>
      </div>
    </nav>
  );
};