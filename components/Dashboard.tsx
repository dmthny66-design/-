
import React, { useState } from 'react';
import { PROJECTS, WHATSAPP_NUMBER } from '../constants';
import { motion } from 'framer-motion';

interface DashboardProps {
  onExit: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onExit }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'إجمالي المشاريع', value: PROJECTS.length, icon: '🖼️', color: 'bg-blue-500' },
    { label: 'رسائل اليوم', value: '12', icon: '💬', color: 'bg-green-500' },
    { label: 'متوسط التقييم', value: '4.9', icon: '⭐', color: 'bg-amber-500' },
    { label: 'الزيارات', value: '1,240', icon: '📈', color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center font-bold">ل</div>
          <span className="font-bold text-lg">لوحة التحكم</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-amber-500 text-white' : 'hover:bg-slate-800 text-slate-400'}`}
          >
            <span>📊</span> نظرة عامة
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'projects' ? 'bg-amber-500 text-white' : 'hover:bg-slate-800 text-slate-400'}`}
          >
            <span>🖼️</span> إدارة المشاريع
          </button>
          <button 
            onClick={() => setActiveTab('messages')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'messages' ? 'bg-amber-500 text-white' : 'hover:bg-slate-800 text-slate-400'}`}
          >
            <span>✉️</span> الرسائل
          </button>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={onExit}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <span>🚪</span> الخروج للموقع
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center px-8">
          <h1 className="text-xl font-bold text-slate-800">
            {activeTab === 'overview' ? 'الإحصائيات العامة' : activeTab === 'projects' ? 'قائمة المشاريع' : 'رسائل العملاء'}
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500">مرحباً، مدير النظام</span>
            <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
          </div>
        </header>

        {/* Dashboard Views */}
        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-3xl">{stat.icon}</span>
                      <span className={`px-2 py-1 rounded text-[10px] text-white font-bold ${stat.color}`}>+12%</span>
                    </div>
                    <h3 className="text-slate-500 text-sm mb-1">{stat.label}</h3>
                    <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-6">مخطط أداء المشاريع (آخر 30 يوم)</h3>
                <div className="h-64 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">
                  سيتم عرض المخطط البياني هنا عند ربط قاعدة البيانات
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold">المشاريع الحالية</h3>
                <button className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-amber-600 transition-colors">
                  + إضافة مشروع جديد
                </button>
              </div>
              <table className="w-full text-right">
                <thead className="bg-slate-50 text-slate-500 text-sm">
                  <tr>
                    <th className="p-4">المشروع</th>
                    <th className="p-4">الفئة</th>
                    <th className="p-4">الحالة</th>
                    <th className="p-4">العمليات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {PROJECTS.map((project) => (
                    <tr key={project.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 flex items-center gap-3">
                        <img src={project.imageUrl} className="w-12 h-12 rounded object-cover" />
                        <span className="font-medium text-slate-700">{project.title}</span>
                      </td>
                      <td className="p-4 text-slate-600">{project.category}</td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-bold">منشور</span>
                      </td>
                      <td className="p-4 space-x-2 space-x-reverse">
                        <button className="text-blue-500 hover:underline text-sm">تعديل</button>
                        <button className="text-red-500 hover:underline text-sm">حذف</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
