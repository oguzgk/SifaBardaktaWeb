import React from 'react';
import { UserCheck, Database, Sprout, MessageCircle } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <UserCheck className="w-8 h-8 text-emerald-400" />,
      title: "Kişiye Özel Tarif Önerisi",
      desc: "Metabolizmanıza, alerjilerinize ve anlık durumunuza göre optimize edilmiş öneriler.",
      colSpan: "md:col-span-2"
    },
    {
      icon: <Database className="w-8 h-8 text-teal-400" />,
      title: "Bilimsel Kaynak",
      desc: "Akademik makaleler ve geleneksel tıp literatüründen süzülen doğru bilgi.",
      colSpan: "md:col-span-1"
    },
    {
      icon: <Sprout className="w-8 h-8 text-green-400" />,
      title: "Bitkisel Ansiklopedi",
      desc: "Hangi bitki neye iyi gelir? Detaylı açıklamalar ve kullanım uyarıları.",
      colSpan: "md:col-span-1"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-indigo-400" />,
      title: "'Aktara Sor' Sohbet Botu",
      desc: "Aklınıza takılan her şeyi sorabileceğiniz, 7/24 aktif yapay zekâ asistanı.",
      colSpan: "md:col-span-2"
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Öne Çıkan Özellikler</h2>
              <p className="text-slate-400 max-w-xl">
                Sadece bir tarif uygulaması değil, cebinizdeki bütünsel sağlık koçu.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={`${feature.colSpan} bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-slate-700 transition-all hover:-translate-y-1 group`}
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};