import React from 'react';

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] bg-white/95 backdrop-blur-md border-r border-slate-100 shadow-[4px_0_24px_rgba(15,23,42,0.02)] z-50 flex flex-col p-6 gap-2">
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>school</span>
        </div>
        <div>
          <h1 className="text-lg font-bold text-slate-900 leading-none">EduCore SMS</h1>
          <p className="text-xs text-slate-500 mt-1">Admin Portal</p>
        </div>
      </div>
      <nav className="flex-1 space-y-1">
        <a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-lg transition-all font-inter text-sm font-medium" href="#">
          <span className="material-symbols-outlined">dashboard</span> Dashboard
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-indigo-600 bg-indigo-50/50 rounded-lg transition-all font-inter text-sm font-medium border-l-2 border-indigo-600" href="#">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>group</span> Students
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-lg transition-all font-inter text-sm font-medium" href="#">
          <span className="material-symbols-outlined">school</span> Courses
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-lg transition-all font-inter text-sm font-medium" href="#">
          <span className="material-symbols-outlined">calendar_month</span> Attendance
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-lg transition-all font-inter text-sm font-medium" href="#">
          <span className="material-symbols-outlined">grade</span> Grades
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-lg transition-all font-inter text-sm font-medium" href="#">
          <span className="material-symbols-outlined">settings</span> Settings
        </a>
      </nav>
      <div className="mt-auto pt-6 border-t border-slate-100">
        <a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg transition-all font-inter text-sm font-medium text-error" href="#">
          <span className="material-symbols-outlined">logout</span> Log Out
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
