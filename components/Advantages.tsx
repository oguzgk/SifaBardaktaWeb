import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export const Advantages: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Neden Şifa Bardakta?</h2>
          <p className="text-slate-400">Sağlığınız için sıradan arama sonuçlarına güvenmeyin.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Traditional Way */}
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 opacity-70">
            <h3 className="text-xl font-bold text-slate-400 mb-6">Sıradan İnternet Aramaları</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-500">
                <XCircle className="shrink-0 text-red-900" />
                <span>Kaynağı belirsiz, yanlış bilgiler.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-500">
                <XCircle className="shrink-0 text-red-900" />
                <span>Reklam amaçlı yönlendirmeler.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-500">
                <XCircle className="shrink-0 text-red-900" />
                <span>Kişisel sağlık durumunu göz ardı eden genel tavsiyeler.</span>
              </li>
            </ul>
          </div>

          {/* Our Way */}
          <div className="bg-emerald-900/10 p-8 rounded-3xl border border-emerald-500/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400"></div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
               Şifa Bardakta Deneyimi
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-200">
                <CheckCircle className="shrink-0 text-emerald-500" />
                <span>Bilimsel ve geleneksel tıbbın süzgecinden geçmiş bilgiler.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-200">
                <CheckCircle className="shrink-0 text-emerald-500" />
                <span>Sadece doğal, katkısız içerikler.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-200">
                <CheckCircle className="shrink-0 text-emerald-500" />
                <span>Size, yaşınıza ve semptomunuza özel analiz.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};