
import React from 'react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">هل أنت مستعد لبدء مشروعك؟</h2>
          <p className="text-slate-400 text-xl mb-12">
            نحن هنا لنحول أفكارك إلى حقيقة. تواصل معنا للحصول على استشارة مجانية وعرض سعر مخصص لمنزلك.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">اتصل بنا</h3>
              <p className="text-slate-400">{WHATSAPP_NUMBER}</p>
            </div>
            
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-green-500/10 rounded-2xl border border-green-500/20 text-center hover:bg-green-500/20 transition-colors group"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171l.353.21c1.511.896 3.243 1.368 5.018 1.369 5.237 0 9.499-4.262 9.501-9.5 0-2.54-.989-4.927-2.785-6.722s-4.183-2.783-6.72-2.783c-5.239 0-9.501 4.263-9.503 9.501-.001 1.918.563 3.79 1.632 5.416l.235.355-.936 3.414 3.505-.919zM17.467 14.308c-.312-.156-1.848-.912-2.135-1.017-.286-.105-.495-.156-.703.156-.208.312-.807 1.017-.989 1.223-.182.206-.364.234-.677.078-.312-.156-1.316-.485-2.508-1.548-.926-.826-1.551-1.846-1.733-2.158-.182-.312-.019-.481.137-.636.141-.14.312-.364.469-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.703-1.693-.962-2.315-.252-.605-.509-.523-.703-.533l-.598-.01c-.208 0-.547.078-.833.39-.286.312-1.094 1.069-1.094 2.604 0 1.535 1.12 3.018 1.275 3.227.156.208 2.204 3.366 5.338 4.721.745.322 1.327.514 1.778.657.748.238 1.43.204 1.969.124.6-.09 1.848-.755 2.108-1.485.26-.73.26-1.354.182-1.485-.077-.13-.285-.208-.597-.364z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">واتساب</h3>
              <p className="text-slate-400">ابدأ محادثة الآن</p>
            </a>
            
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">المقر</h3>
              <p className="text-slate-400">المملكة العربية السعودية</p>
            </div>
          </div>
          
          <div className="bg-white/5 p-1 rounded-full flex items-center max-w-lg mx-auto border border-white/10">
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني" 
              className="bg-transparent flex-1 px-6 py-3 focus:outline-none text-sm"
            />
            <button className="bg-amber-500 text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-400 transition-colors">
              اشترك للنشرة البريدية
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/5 mt-24 pt-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} لمسة المستقبل للديكور. جميع الحقوق محفوظة.</p>
      </div>
    </section>
  );
};

export default Contact;
