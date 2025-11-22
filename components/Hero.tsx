import React from 'react';
import { Sparkles, Mail, Lock, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Abstract Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
            <Sparkles size={14} />
            <span>Yapay Zekâ Destekli Sağlık</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Şifa Bardakta <br />
            <span className="text-emerald-500">Kişiye Özel</span> Şifalı İçecek Rehberiniz
          </h1>
          
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Doğal bitkiler, meyveler ve baharatlarla hazırlanmış sağlıklı içecek önerilerini yapay zekâ desteğiyle size özel sunan yeni nesil bir mobil uygulama.
          </p>

        </motion.div>

        {/* App Mockup Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Floating Glass Card / Phone Mockup */}
          <div className="relative w-[280px] h-[580px] bg-slate-950 rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
             {/* Screen Content - Login UI */}
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
                    <div className="bg-white rounded-[1.5rem] p-5 shadow-2xl w-full shadow-black/50">
                        <h3 className="text-center text-xl font-bold text-slate-900 mb-1">Kayıt Ol</h3>
                        <p className="text-center text-slate-400 text-[10px] tracking-[0.15em] mb-5 uppercase font-semibold">ŞİFA BARDAKTA</p>
                        
                        <div className="space-y-3">
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                                <div className="w-full border border-slate-200 rounded-lg py-2.5 pl-9 pr-4 text-[11px] text-slate-500 bg-white">E-posta</div>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                                <div className="w-full border border-slate-200 rounded-lg py-2.5 pl-9 pr-9 text-[11px] text-slate-500 bg-white">Şifre</div>
                                <EyeOff className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                                <div className="w-full border border-slate-200 rounded-lg py-2.5 pl-9 pr-9 text-[11px] text-slate-500 bg-white">Şifreyi Doğrula</div>
                                <EyeOff className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                            </div>
                        </div>

                        <div className="w-full bg-[#388E3C] text-white font-bold py-2.5 rounded-full mt-5 shadow-lg text-xs text-center">
                            Kayıt Ol
                        </div>

                        <div className="w-full bg-white border border-slate-200 text-slate-600 font-medium py-2.5 rounded-full mt-3 flex items-center justify-center gap-2 text-[10px]">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-3.5 h-3.5" alt="Google" />
                            Sign in with Google
                        </div>
                        
                        <p className="text-center text-[9px] text-slate-500 mt-3">
                            Zaten hesabın var mı? <span className="text-[#388E3C] font-bold underline decoration-[#388E3C]">Giriş Yap</span>
                        </p>
                    </div>

                     <div className="absolute bottom-12 text-center w-full">
                      <h2 className="font-serif italic text-white text-2xl drop-shadow-md tracking-wide opacity-90">ŞİFA BARDAKTA</h2>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};