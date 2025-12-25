
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ isOpen, onClose, onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // كلمة المرور الافتراضية - يمكنك تغييرها هنا
  const CORRECT_PASSWORD = '2025';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setError(false);
      setPassword('');
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">منطقة محظورة</h2>
              <p className="text-slate-500 mb-8 text-sm">يرجى إدخال كلمة المرور للوصول إلى لوحة التحكم</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="كلمة المرور"
                    autoFocus
                    className={`w-full px-6 py-4 rounded-xl border-2 transition-all outline-none text-center text-lg tracking-widest ${error ? 'border-red-500 bg-red-50 animate-shake' : 'border-slate-100 focus:border-amber-500 bg-slate-50'}`}
                  />
                  {error && (
                    <motion.p 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="text-red-500 text-xs mt-2 font-bold"
                    >
                      كلمة المرور غير صحيحة!
                    </motion.p>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <button 
                    type="submit"
                    className="flex-1 bg-amber-500 text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/30"
                  >
                    دخول
                  </button>
                  <button 
                    type="button"
                    onClick={onClose}
                    className="px-6 py-4 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all"
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            </div>
            
            <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
              <span className="text-slate-400 text-[10px] uppercase tracking-widest">Security System v1.0</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AdminLogin;
