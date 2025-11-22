import React from 'react';
import { MessageSquare, Cpu, Coffee, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare size={32} />,
      title: "Belirtiyi Yaz",
      description: "Hastalık belirtilerini veya ruh halini uygulamaya yaz.",
    },
    {
      icon: <Cpu size={32} />,
      title: "AI Analiz Etsin",
      description: "Yapay zekâ semptomlarını tarasın ve en uygun bitkileri eşleştirsin.",
    },
    {
      icon: <Coffee size={32} />,
      title: "Tarifini Al",
      description: "Sana özel hazırlanan şifalı içecek tarifini görüntüle.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Uygula & Öğren",
      description: "Malzemeleri tanı, faydalarını oku ve şifayı yudumla.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasıl Çalışır?</h2>
          <p className="text-slate-400 text-lg">
            Sağlığa giden yol sadece 4 adım. Karmaşık araştırmalar yok, anında sonuç var.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl h-full hover:border-emerald-500/50 transition-colors duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-emerald-600 text-white font-bold rounded-full flex items-center justify-center shadow-lg text-lg z-10">
                  {index + 1}
                </div>
                
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-800">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Line (Desktop only, except last item) */}
              {index !== 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-800 to-transparent z-0"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};