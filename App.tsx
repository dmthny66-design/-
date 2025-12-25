
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import AIAdvisor from './components/AIAdvisor';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import AdminLogin from './components/AdminLogin';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [isAdminView, setIsAdminView] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAdminSuccess = () => {
    setIsLoginModalOpen(false);
    setIsAdminView(true);
  };

  if (loading) {
    return (
      <div className="h-screen w-full bg-slate-900 flex flex-col items-center justify-center text-white">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center shadow-2xl mb-6"
        >
          <span className="text-4xl font-bold">ل</span>
        </motion.div>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          className="h-1 bg-amber-500/20 rounded-full overflow-hidden"
        >
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="relative h-full w-1/2 bg-amber-500"
          />
        </motion.div>
        <p className="mt-4 text-slate-400 text-sm tracking-widest animate-pulse">لمسة المستقبل ... جاري التحميل</p>
      </div>
    );
  }

  if (isAdminView) {
    return <Dashboard onExit={() => setIsAdminView(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* الصفحة الثالثة - قسم الخدمات */}
        <section id="services" className="py-24 bg-white border-b border-slate-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 order-2 md:order-1">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    لماذا تختار <span className="text-amber-500">لمسة المستقبل</span>؟
                  </h2>
                  <p className="text-slate-600 mb-10 text-lg leading-relaxed text-right">
                    نحن لا نقوم فقط بصبغ الجدران، نحن نخلق بيئة تعكس هويتك وذوقك. نجمع بين الخبرة الطويلة وأحدث التقنيات العالمية في مجال الديكور والتنفيذ لضمان رضاكم التام.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { 
                      title: 'دهانات داخلية وخارجية', 
                      desc: 'استخدام ماركات عالمية مثل جوتن والجزيرة مع ضمان عدم التغير.',
                      icon: '🎨'
                    },
                    { 
                      title: 'ديكورات بديل الخشب', 
                      desc: 'تركيب احترافي لتكسيات الجدران المقاومة للماء والحرارة.',
                      icon: '🪵'
                    },
                    { 
                      title: 'تجديد منازل بالكامل', 
                      desc: 'خدمة "تسليم مفتاح" تشمل السباكة والكهرباء والدهانات والجبس.',
                      icon: '🏠'
                    },
                    { 
                      title: 'بديل الرخام (PVC)', 
                      desc: 'لمسة فخامة الرخام الطبيعي بأقل التكاليف وأعلى جودة تركيب.',
                      icon: '💎'
                    }
                  ].map((service, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group p-6 bg-slate-50 rounded-2xl hover:bg-amber-50 transition-colors border border-slate-100"
                    >
                      <div className="text-3xl mb-4">{service.icon}</div>
                      <h4 className="font-bold text-slate-800 mb-2">{service.title}</h4>
                      <p className="text-sm text-slate-500 leading-loose">{service.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 relative order-1 md:order-2"
              >
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800" 
                  alt="Quality Workmanship" 
                  className="relative z-10 w-full rounded-3xl shadow-2xl border-4 border-white"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <ProjectGallery />
        <Contact />
      </main>

      <footer className="py-8 bg-slate-900 text-center text-white border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center font-bold">ل</div>
               <span className="font-bold">لمسة المستقبل للديكور</span>
            </div>
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} جميع الحقوق محفوظة لـ لمسة المستقبل</p>
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="text-slate-500 text-xs hover:text-amber-500 transition-colors flex items-center gap-1"
            >
              🔒 لوحة الإدارة
            </button>
          </div>
        </div>
      </footer>

      <AdminLogin 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onSuccess={handleAdminSuccess}
      />

      <a 
        href="https://wa.me/966501308295" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50 animate-bounce"
        aria-label="WhatsApp Contact"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171l.353.21c1.511.896 3.243 1.368 5.018 1.369 5.237 0 9.499-4.262 9.501-9.5 0-2.54-.989-4.927-2.785-6.722s-4.183-2.783-6.72-2.783c-5.239 0-9.501 4.263-9.503 9.501-.001 1.918.563 3.79 1.632 5.416l.235.355-.936 3.414 3.505-.919zM17.467 14.308c-.312-.156-1.848-.912-2.135-1.017-.286-.105-.495-.156-.703.156-.208.312-.807 1.017-.989 1.223-.182.206-.364.234-.677.078-.312-.156-1.316-.485-2.508-1.548-.926-.826-1.551-1.846-1.733-2.158-.182-.312-.019-.481.137-.636.141-.14.312-.364.469-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.703-1.693-.962-2.315-.252-.605-.509-.523-.703-.533l-.598-.01c-.208 0-.547.078-.833.39-.286.312-1.094 1.069-1.094 2.604 0 1.535 1.12 3.018 1.275 3.227.156.208 2.204 3.366 5.338 4.721.745.322 1.327.514 1.778.657.748.238 1.43.204 1.969.124.6-.09 1.848-.755 2.108-1.485.26-.73.26-1.354.182-1.485-.077-.13-.285-.208-.597-.364z"/>
        </svg>
      </a>

      <AIAdvisor />
    </div>
  );
};

export default App;
