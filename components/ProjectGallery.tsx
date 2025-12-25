
import React, { useState, useMemo } from 'react';
import { PROJECTS, WHATSAPP_LINK } from '../constants';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('الكل');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(PROJECTS.map((p) => p.category)));
    return ['الكل', ...uniqueCategories];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'الكل') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleShare = () => {
    if (selectedProject) {
      const text = `شاهد هذا العمل الرائع من لمسة المستقبل: ${selectedProject.title}\n${selectedProject.description}`;
      if (navigator.share) {
        navigator.share({
          title: selectedProject.title,
          text: text,
          url: window.location.href,
        });
      } else {
        navigator.clipboard.writeText(`${text}\n${window.location.href}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">معرض أعمالنا</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          تصفح مجموعة مختارة من مشاريعنا الناجحة في تجديد المنازل والدهانات والديكورات الحديثة.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:-translate-y-1 ${
                activeCategory === cat
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5 }}
                key={project.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 text-right">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="text-amber-600 font-bold text-sm hover:text-amber-700 flex items-center gap-1 group/btn"
                    >
                      عرض التفاصيل 
                      <svg className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
              />
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-auto overflow-y-auto bg-slate-100 scrollbar-hide">
                   <div className="flex flex-col gap-2 p-2">
                     <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full rounded-xl object-cover shadow-sm" />
                     {selectedProject.additionalImages?.map((img, idx) => (
                       <img key={idx} src={img} alt={`${selectedProject.title} view ${idx + 1}`} className="w-full rounded-xl object-cover shadow-sm" />
                     ))}
                   </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto text-right flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setSelectedProject(null)}
                        className="p-2 bg-slate-100 rounded-full text-slate-400 hover:text-amber-500 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                      <button 
                        onClick={handleShare}
                        className="p-2 bg-slate-100 rounded-full text-slate-400 hover:text-blue-500 transition-colors relative"
                        title="مشاركة"
                      >
                        {copied ? (
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded">تم النسخ!</span>
                        ) : null}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6a3 3 0 100-2.684l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                        </svg>
                      </button>
                    </div>
                    <div>
                      <span className="text-amber-500 font-bold text-sm block mb-1">{selectedProject.category}</span>
                      <h3 className="text-3xl font-bold text-slate-900">{selectedProject.title}</h3>
                    </div>
                  </div>

                  <div className="space-y-6 flex-1">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2 border-r-4 border-amber-500 pr-3">نظرة عامة على المشروع</h4>
                      <p className="text-slate-600 leading-loose">
                        {selectedProject.longDescription || selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.materials && (
                      <div>
                        <h4 className="font-bold text-slate-800 mb-3 border-r-4 border-amber-500 pr-3">المواد المستخدمة</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.materials.map((m, i) => (
                            <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm font-medium">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`${WHATSAPP_LINK}?text=أهلاً لمسة المستقبل، أريد الاستفسار عن مشروع: ${selectedProject.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 text-white py-4 rounded-xl font-bold text-center hover:bg-green-600 transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      استفسر عن هذا التصميم عبر واتساب
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171l.353.21c1.511.896 3.243 1.368 5.018 1.369 5.237 0 9.499-4.262 9.501-9.5 0-2.54-.989-4.927-2.785-6.722s-4.183-2.783-6.72-2.783c-5.239 0-9.501 4.263-9.503 9.501-.001 1.918.563 3.79 1.632 5.416l.235.355-.936 3.414 3.505-.919zM17.467 14.308c-.312-.156-1.848-.912-2.135-1.017-.286-.105-.495-.156-.703.156-.208.312-.807 1.017-.989 1.223-.182.206-.364.234-.677.078-.312-.156-1.316-.485-2.508-1.548-.926-.826-1.551-1.846-1.733-2.158-.182-.312-.019-.481.137-.636.141-.14.312-.364.469-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.703-1.693-.962-2.315-.252-.605-.509-.523-.703-.533l-.598-.01c-.208 0-.547.078-.833.39-.286.312-1.094 1.069-1.094 2.604 0 1.535 1.12 3.018 1.275 3.227.156.208 2.204 3.366 5.338 4.721.745.322 1.327.514 1.778.657.748.238 1.43.204 1.969.124.6-.09 1.848-.755 2.108-1.485.26-.73.26-1.354.182-1.485-.077-.13-.285-.208-.597-.364z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectGallery;
