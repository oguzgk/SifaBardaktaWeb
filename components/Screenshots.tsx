import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, EyeOff, ArrowLeft, ChevronLeft, ChevronRight, Coffee, GlassWater, Cookie, Citrus, Banana, CupSoda, Leaf, Sprout, Flower2, Droplets, Search, Menu } from 'lucide-react';

export const Screenshots: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // --- Static Phone Components (Visual Only) ---

  // 1. LOGIN SCREEN (Dark leafy background, White modal)
  const PhoneLogin = (
    <div className="w-full h-full relative flex flex-col pointer-events-none select-none bg-slate-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-80">
             <img 
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop" 
                alt="Leaves" 
                className="w-full h-full object-cover"
             />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70 z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-6 items-center justify-center">
            {/* Login Card */}
            <div className="bg-white rounded-[1.5rem] p-6 shadow-2xl w-full max-w-[280px]">
                <h3 className="text-center text-xl font-bold text-slate-900 mb-1">Kayıt Ol</h3>
                <p className="text-center text-slate-400 text-[10px] tracking-[0.15em] mb-6 uppercase font-semibold">ŞİFA BARDAKTA</p>
                
                <div className="space-y-3">
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <div className="w-full border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 text-xs text-slate-500 bg-white">E-posta</div>
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <div className="w-full border border-slate-200 rounded-lg py-2.5 pl-10 pr-10 text-xs text-slate-500 bg-white">Şifre</div>
                        <EyeOff className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <div className="w-full border border-slate-200 rounded-lg py-2.5 pl-10 pr-10 text-xs text-slate-500 bg-white">Şifreyi Doğrula</div>
                        <EyeOff className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    </div>
                </div>

                <div className="w-full bg-[#388E3C] text-white font-bold py-2.5 rounded-full mt-6 shadow-lg text-xs text-center">
                    Kayıt Ol
                </div>

                <div className="w-full bg-white border border-slate-200 text-slate-600 font-medium py-2.5 rounded-full mt-3 flex items-center justify-center gap-2 text-xs">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />
                    Sign in with Google
                </div>
                
                <p className="text-center text-[10px] text-slate-500 mt-4">
                    Zaten hesabın var mı? <span className="text-[#388E3C] font-bold underline decoration-[#388E3C]">Giriş Yap</span>
                </p>
            </div>

             <div className="absolute bottom-12 text-center">
              <h2 className="font-serif italic text-white text-2xl drop-shadow-md tracking-wide opacity-90">ŞİFA BARDAKTA</h2>
           </div>
        </div>
    </div>
  );

  // 2. LIST SCREEN (List of teas with large icons)
  const PhoneList = (
    <div className="w-full h-full bg-[#F8FAF9] relative flex flex-col pointer-events-none select-none overflow-hidden">
         {/* Header */}
         <div className="bg-[#43A047] h-[64px] w-full flex items-end pb-3 px-5 shadow-md z-10">
            <span className="font-serif italic text-white text-xl tracking-wide">Şifa Bardakta</span>
         </div>
         
         {/* List Content */}
         <div className="flex-1 overflow-hidden px-4 py-4 space-y-3 relative">
            
            {/* Item 1: Ihlamur */}
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 h-20">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 ml-1">
                   <Coffee strokeWidth={1.5} className="w-10 h-10 text-slate-800" />
                </div>
                <div className="flex-1 border-l border-slate-100 pl-4 h-full flex flex-col justify-center">
                   <h4 className="font-bold text-slate-900 text-sm uppercase tracking-tight">IHLAMUR ÇAYI</h4>
                   <p className="text-[10px] text-slate-400 leading-tight mt-0.5 font-medium">Grip ve soğuk algınlığı semptomlarını azaltır</p>
                </div>
            </div>

            {/* Item 2: Nane Limon */}
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 h-20">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 ml-1">
                   <GlassWater strokeWidth={1.5} className="w-10 h-10 text-slate-800" />
                </div>
                <div className="flex-1 border-l border-slate-100 pl-4 h-full flex flex-col justify-center">
                   <h4 className="font-bold text-slate-900 text-sm uppercase tracking-tight">NANE LİMON</h4>
                   <p className="text-[10px] text-slate-400 leading-tight mt-0.5 font-medium">Sindirimi Kolaylaştırır</p>
                </div>
            </div>

            {/* Item 3: Papatya */}
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 h-20">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 ml-1">
                   <CupSoda strokeWidth={1.5} className="w-10 h-10 text-slate-800" />
                </div>
                <div className="flex-1 border-l border-slate-100 pl-4 h-full flex flex-col justify-center">
                   <h4 className="font-bold text-slate-900 text-sm uppercase tracking-tight">PAPATYA ÇAYI</h4>
                   <p className="text-[10px] text-slate-400 leading-tight mt-0.5 font-medium">Rahatlatıcı etkisi: Stresi azaltır ve uykuya yardımcı olur.</p>
                </div>
            </div>

            {/* Item 4: Fıstık Ezmeli */}
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 h-20">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 ml-1">
                   <Coffee strokeWidth={1.5} className="w-10 h-10 text-slate-800" />
                </div>
                <div className="flex-1 border-l border-slate-100 pl-4 h-full flex flex-col justify-center">
                   <h4 className="font-bold text-slate-900 text-sm uppercase tracking-tight">FISTIK EZMELİ</h4>
                   <p className="text-[10px] text-slate-400 leading-tight mt-0.5 font-medium">Protein ve enerji kaynağı: Kas gelişimini destekler.</p>
                </div>
            </div>

            {/* Item 5: Tarçınlı Portakal */}
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 h-20">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 ml-1">
                   <Citrus strokeWidth={1.5} className="w-10 h-10 text-slate-800" />
                </div>
                <div className="flex-1 border-l border-slate-100 pl-4 h-full flex flex-col justify-center">
                   <h4 className="font-bold text-slate-900 text-sm uppercase tracking-tight">TARÇINLI PORTAKAL</h4>
                   <p className="text-[10px] text-slate-400 leading-tight mt-0.5 font-medium">Bağışıklık desteği: C vitamini yönünden zengindir.</p>
                </div>
            </div>

            {/* Item 6: Muzlu Hurma */}
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 h-20">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 ml-1">
                   <Banana strokeWidth={1.5} className="w-10 h-10 text-slate-800" />
                </div>
                <div className="flex-1 border-l border-slate-100 pl-4 h-full flex flex-col justify-center">
                   <h4 className="font-bold text-slate-900 text-sm uppercase tracking-tight">MUZLU HURMA</h4>
                   <p className="text-[10px] text-slate-400 leading-tight mt-0.5 font-medium">Doğal enerji kaynağı: Hurmadan gelen doğal şekerler.</p>
                </div>
            </div>
         </div>

         {/* Floating Action Button */}
         <div className="absolute bottom-5 right-5 z-20">
            <div className="bg-[#43A047] text-white pl-3 pr-4 py-2.5 rounded-full shadow-[0_4px_10px_rgba(67,160,71,0.4)] flex items-center gap-2">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                     <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" className="w-3 h-3 invert" />
                </div>
                <span className="font-serif italic text-xs tracking-wide">Aktar'a Sor</span>
            </div>
         </div>
         
         {/* Fade at bottom */}
         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8FAF9] to-transparent pointer-events-none z-10"></div>
    </div>
  );

  // 3. CHAT SCREEN (Blender - Exact Recipe Text)
  const PhoneChat = (
    <div className="w-full h-full bg-[#F5F7F6] relative flex flex-col pointer-events-none select-none overflow-hidden">
         {/* Status Bar Mock */}
         <div className="bg-[#43A047] h-6 w-full"></div>

         {/* Header */}
         <div className="bg-[#43A047] h-[50px] px-4 flex items-center gap-3 text-white shadow-md z-10">
            <ArrowLeft className="w-5 h-5" />
            <div className="flex items-center gap-2.5">
               <div className="w-8 h-8 bg-slate-800/30 rounded-full border border-white/20 p-1.5 flex items-center justify-center backdrop-blur-sm">
                    <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" alt="Blender" className="w-full h-full invert opacity-90" />
               </div>
               <span className="font-serif italic text-lg">Blender</span>
            </div>
         </div>

         {/* Chat Area */}
         <div className="flex-1 overflow-hidden p-3 bg-[#F5F7F6] relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            {/* User Message */}
            <div className="flex justify-end mb-4 relative z-10">
               <div className="bg-[#43A047] text-white px-4 py-2.5 rounded-[1.2rem] rounded-tr-none text-sm font-medium shadow-sm">
                  Başım ağrıyor
               </div>
            </div>

            {/* Bot Message (The Recipe) */}
            <div className="flex items-end gap-2 relative z-10">
               <div className="bg-white p-4 rounded-[1.2rem] rounded-tl-none shadow-sm border border-slate-100 text-sm w-full max-w-[95%]">
                  {/* Bot Header */}
                  <div className="flex items-center gap-2 text-[#43A047] font-bold text-xs mb-3 border-b border-slate-100 pb-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" alt="icon" className="w-3.5 h-3.5" />
                    Blender
                  </div>

                  <p className="font-bold text-slate-900 mb-1.5 text-[11px]">Baş Ağrısı İçin: Zencefil Çayı</p>
                  <p className="text-slate-600 text-[10px] leading-relaxed mb-2.5">
                    Faydaları: Zencefil, anti-inflamatuar özellikleri sayesinde baş ağrısını hafifletmeye yardımcı olabilir. Ayrıca mide bulantısını da azaltabilir.
                  </p>
                  
                  <div className="space-y-1 mb-2.5">
                     <p className="text-slate-900 text-[10px] font-bold">Malzemeler:</p>
                     <ul className="list-disc pl-4 text-slate-600 text-[10px] space-y-0.5 marker:text-slate-400">
                        <li>1 tatlı kaşığı taze rendelenmiş zencefil</li>
                        <li>1 su bardağı su</li>
                        <li>İsteğe bağlı olarak bal ve limon</li>
                     </ul>
                  </div>
                  
                  <div className="space-y-1">
                     <p className="text-slate-900 text-[10px] font-bold">Yapılışı:</p>
                     <ol className="list-decimal pl-4 text-slate-600 text-[10px] space-y-0.5 marker:text-slate-400">
                        <li>Suyu kaynatın.</li>
                        <li>Kaynar suya rendelenmiş zencefili ekleyin.</li>
                        <li>5-10 dakika demlemeye bırakın.</li>
                        <li>Süzerek fincana alın.</li>
                        <li>İsteğe bağlı olarak bal ve limon ekleyerek tüketin.</li>
                     </ol>
                  </div>
               </div>
            </div>
         </div>

         {/* Input Area */}
         <div className="p-3 bg-[#F5F7F6]">
            <div className="bg-white rounded-full px-4 py-2.5 shadow-sm border border-slate-200 flex justify-between items-center">
                <span className="text-slate-400 text-xs pl-1">Şikayetiniz Nedir?</span>
                <div className="w-7 h-7 bg-[#43A047] rounded-full flex items-center justify-center shadow-sm">
                   <img src="https://cdn-icons-png.flaticon.com/512/3504/3504837.png" className="w-3.5 h-3.5 invert" />
                </div>
            </div>
            <div className="w-1/3 h-1 bg-slate-300 mx-auto mt-3 rounded-full opacity-50"></div>
         </div>
    </div>
  );

  const slides = [
    { id: 1, content: PhoneLogin },
    { id: 2, content: PhoneList },
    { id: 3, content: PhoneChat },
  ];

  // Auto-play logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 3500); // 3.5 seconds
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Reorder slides for desktop view to create the rotation effect
  const getOrderedSlides = () => {
    const ordered = [];
    for (let i = 0; i < slides.length; i++) {
      ordered.push(slides[(currentIndex + i) % slides.length]);
    }
    return ordered;
  };

  return (
    <section id="screenshots" className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 blur-[100px] rounded-full"></div>
         <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-[10%] text-emerald-800/30"
         >
            <Leaf size={120} strokeWidth={1} />
         </motion.div>
         <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-40 right-[10%] text-teal-800/20"
         >
            <Sprout size={140} strokeWidth={1} />
         </motion.div>
         <motion.div 
            animate={{ rotate: [0, 360] }} 
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-[20%] text-emerald-700/10"
         >
            <Flower2 size={100} strokeWidth={1} />
         </motion.div>
         <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 left-[20%] text-cyan-900/20"
         >
            <Droplets size={80} strokeWidth={1} />
         </motion.div>
      </div>

      <div className="container mx-auto px-6 mb-12 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Uygulama Arayüzü</h2>
        <p className="text-slate-400">
          Kayıt ol, şifalı içecekleri keşfet veya yapay zekâ asistanına danış.
        </p>
      </div>

      <div 
        className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        
        {/* --- MOBILE VIEW (Carousel 1 Item) --- */}
        <div className="lg:hidden relative w-full max-w-[300px] h-[560px]">
            <AnimatePresence mode="wait">
                <motion.div 
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = offset.x > 50 ? -1 : offset.x < -50 ? 1 : 0;
                        if (swipe === 1) handleNext();
                        if (swipe === -1) handlePrev();
                    }}
                    className="w-[250px] h-[520px] mx-auto bg-slate-950 rounded-[2.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden relative select-none"
                >
                    {slides[currentIndex].content}
                </motion.div>
            </AnimatePresence>

            {/* Mobile Controls */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-20">
                <button onClick={handlePrev} className="p-2 bg-slate-800/80 rounded-full text-white hover:bg-emerald-500 transition-colors">
                    <ChevronLeft size={20} />
                </button>
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                <button onClick={handleNext} className="p-2 bg-slate-800/80 rounded-full text-white hover:bg-emerald-500 transition-colors">
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>

        {/* --- DESKTOP VIEW (Carousel 3 Items Side by Side with Rotation) --- */}
        <div className="hidden lg:grid grid-cols-3 gap-8 items-center justify-items-center w-full h-[600px] relative">
            <AnimatePresence mode='popLayout'>
                {getOrderedSlides().map((slide) => (
                    <motion.div
                        key={slide.id}
                        layoutId={`slide-${slide.id}`}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="w-[250px] h-[520px] bg-slate-950 rounded-[2.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden relative"
                    >
                        {slide.content}
                    </motion.div>
                ))}
            </AnimatePresence>
            
            {/* Desktop Controls */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-8 z-20">
                <button onClick={handlePrev} className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full text-white hover:bg-emerald-500 hover:scale-110 transition-all border border-slate-700">
                    <ChevronLeft size={24} />
                </button>
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-8 z-20">
                <button onClick={handleNext} className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full text-white hover:bg-emerald-500 hover:scale-110 transition-all border border-slate-700">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>

        {/* Pagination Dots (Shared) */}
        <div className="flex gap-2 mt-8">
            {slides.map((_, idx) => (
                <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-8 bg-emerald-500" : "w-2 bg-slate-700 hover:bg-slate-600"}`}
                />
            ))}
        </div>

      </div>
    </section>
  );
};