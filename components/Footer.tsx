import React from 'react';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-4 select-none">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3504/3504837.png" 
                  alt="Şifa Bardakta Logo" 
                  className="w-10 h-10 object-contain opacity-90"
                />
                <span className="text-xl font-bold text-white">
                  Şifa<span className="text-emerald-500">Bardakta</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm mb-6">
                Doğanın şifası, yapay zekânın gücüyle birleşiyor. Sağlıklı yarınlar için bugün bir bardak şifa iç.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Yasal & Politika (Google Play)</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <a href="privacy.html" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                    🔒 Gizlilik Politikası & KVKK
                  </a>
                </li>
                <li>
                  <a href="delete-account.html" className="hover:text-red-400 transition-colors flex items-center gap-2 text-red-400">
                    🗑️ Hesap ve Veri Silme Talebi
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:text-right">
              <h4 className="text-white font-bold mb-4">İletişim</h4>
              <ul className="space-y-3 text-sm text-slate-400 inline-block text-left">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  sifabardakta@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  oguzhangoktemir473@gmail.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 text-center text-slate-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Şifa Bardakta. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};