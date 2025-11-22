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
        isScrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo - Static (Not clickable) */}
        <div className="flex items-center gap-3 select-none">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3504/3504837.png" 
            alt="Şifa Bardakta Logo" 
            className="w-12 h-12 object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]"
          />
          <span className="text-xl font-bold tracking-tight text-white">
            Şifa<span className="text-emerald-400">Bardakta</span>
          </span>
        </div>
      </div>
    </nav>
  );
};