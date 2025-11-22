import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { Advantages } from './components/Advantages';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Features />
        <Screenshots />
        <Advantages />
      </main>
      <Footer />
    </div>
  );
};

export default App;