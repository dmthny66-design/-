
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1920" 
          alt="Modern Home Decor" 
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
          نجعل من منزلك <span className="text-amber-500">لوحة فنية</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          نحن في "لمسة المستقبل" متخصصون في تحويل المساحات العادية إلى أماكن استثنائية من خلال أرقى الدهانات وأحدث تصاميم الديكور.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="#gallery" 
            className="bg-amber-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            استعرض أعمالنا
          </a>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            تواصل معنا الآن
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
