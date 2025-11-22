import React from 'react';
import { ShieldCheck, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Doğanın Bilgeliği, <br/>
            <span className="text-emerald-400">Teknolojinin Hızıyla</span> Buluştu.
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6 text-lg">
            Şifa Bardakta, kullanıcıların belirtmiş olduğu semptomlara göre doğal şifalı içecek tarifleri sunan yapay zekâ destekli bir mobil uygulamadır. 
          </p>
          <p className="text-slate-400 leading-relaxed mb-12">
            Yanlış sağlık bilgilerinin yaygınlaştığı günümüzde, bilimsel araştırmalara dayalı güvenilir tarifler sunarak kullanıcıların daha sağlıklı seçimler yapmasına yardımcı olur. Geleneksel tıp bilgileri ile modern algoritmaları birleştiriyoruz.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
             <div className="flex gap-4 bg-slate-900/50 p-4 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
               <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-500 shrink-0">
                 <ShieldCheck />
               </div>
               <div>
                 <h4 className="font-bold text-white">Güvenilir Kaynak</h4>
                 <p className="text-sm text-slate-500">Doğrulanmış reçeteler</p>
               </div>
             </div>

             <div className="flex gap-4 bg-slate-900/50 p-4 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
               <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-500 shrink-0">
                 <Leaf />
               </div>
               <div>
                 <h4 className="font-bold text-white">%100 Doğal</h4>
                 <p className="text-sm text-slate-500">Katkısız içerikler</p>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};