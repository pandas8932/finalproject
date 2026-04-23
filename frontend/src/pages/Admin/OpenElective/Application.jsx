import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MOCK_COURSES = [
  { id: 'CS701', department: 'Computer Science', title: 'Ethics in AI', desc: 'Investigating the moral implications of machine learning and autonomous decision-making systems.', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop' },
  { id: 'AR602', department: 'Architecture', title: 'Sustainable Urban Design', desc: 'Mastering the principles of eco-friendly city planning.', img: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=400&auto=format&fit=crop' },
  { id: 'EC505', department: 'Economics', title: 'Behavioral Finance', desc: 'An exploration of psychological influences and cognitive biases affecting financial behaviors.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=400&auto=format&fit=crop' },
  { id: 'HS401', department: 'Humanities', title: 'History of Modern Art', desc: 'Analyzing the fundamental shifts in visual representation from post-impressionism to contemporary art.', img: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=400&auto=format&fit=crop' },
  { id: 'BT802', department: 'Biotech', title: 'Genomic Data Science', desc: 'Introduction to computational methods for analyzing genomic and transcriptomic data sets.', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400&auto=format&fit=crop' },
  { id: 'EE304', department: 'Electrical', title: 'Renewable Energy Systems', desc: 'Design and analysis of solar, wind, and biofuel based sustainable energy systems.', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=400&auto=format&fit=crop' },
  { id: 'MG201', department: 'Management', title: 'Strategic Negotiation', desc: 'Advanced techniques in corporate negotiation and conflict resolution.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop' },
  { id: 'PH901', department: 'Physics', title: 'Quantum Computing', desc: 'Fundamentals of quantum mechanics, qubits, and quantum algorithm development.', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=400&auto=format&fit=crop' },
  { id: 'PY305', department: 'Psychology', title: 'Cognitive Neuroscience', desc: 'Examining the biological underpinnings of thought, memory, and perception.', img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=400&auto=format&fit=crop' },
  { id: 'MC102', department: 'Media Studies', title: 'Digital Media Production', desc: 'Hands-on approach to modern video and audio content production for streaming platforms.', img: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=400&auto=format&fit=crop' },
  { id: 'MT405', department: 'Mathematics', title: 'Cryptography', desc: 'Mathematical foundations of modern cryptography and information security protocols.', img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400&auto=format&fit=crop' },
  { id: 'CE501', department: 'Civil Engineering', title: 'Smart Infrastructure', desc: 'Integrating IoT devices and real-time monitoring algorithms into civil structures.', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop' },
  { id: 'CH202', department: 'Chemistry', title: 'Green Chemistry', desc: 'Chemical engineering processes focused on minimizing hazardous substances and waste.', img: 'https://images.unsplash.com/photo-1532187863486-abf9db0c20ab?q=80&w=400&auto=format&fit=crop' },
  { id: 'LI301', department: 'Literature', title: 'World Mythology', desc: 'Comparative study of globally significant mythological narratives and archetypes.', img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400&auto=format&fit=crop' },
  { id: 'PO404', department: 'Political Science', title: 'Global Diplomacy', desc: 'Historical and contemporary case studies in international relations and diplomacy.', img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=400&auto=format&fit=crop' }
];

const Application = () => {
  const navigate = useNavigate();
  const [selectedCourses, setSelectedCourses] = useState([]);

  const toggleCourse = (course) => {
    if (selectedCourses.some(c => c.id === course.id)) {
      setSelectedCourses(selectedCourses.filter(c => c.id !== course.id));
    } else {
      if (selectedCourses.length >= 3) {
        alert("You can only select up to 3 courses based on priority.");
        return;
      }
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const moveItem = (index, direction) => {
    const newItems = [...selectedCourses];
    if (direction === 'up' && index > 0) {
      [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
      setSelectedCourses(newItems);
    } else if (direction === 'down' && index < newItems.length - 1) {
      [newItems[index + 1], newItems[index]] = [newItems[index], newItems[index + 1]];
      setSelectedCourses(newItems);
    }
  };

  const handleSubmit = () => {
    if (selectedCourses.length === 0) {
      alert("Please select at least 1 course priority.");
      return;
    }
    // Store the highest priority allocated course in localStorage
    localStorage.setItem('allocatedElective', JSON.stringify({
      course: selectedCourses[0],
      date: new Date().toLocaleDateString()
    }));
    
    // In a real app we'd submit to backend, then redirect to results
    navigate('/dashboard/open-elective/results');
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200">
      <div className="flex items-center justify-between px-8 py-6 w-full sticky top-0 z-50 backdrop-blur-md bg-[#0f172a]/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl italic text-orange-500">Sahara Academic</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">search</span>
            <input className="pl-10 pr-4 py-2 bg-slate-800/80 rounded-full border border-slate-700/50 focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm w-64 text-slate-200 placeholder-slate-500" placeholder="Search courses..." type="text"/>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-12 max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12">
        {/* Courses Section */}
        <div className="flex-1">
          <div className="mb-10">
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2 block">Application Portal</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-4 leading-tight">Available Electives</h2>
            <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
              Select your preferred subjects for the upcoming academic semester. Your choices shape your unique academic journey. You may select up to 3 choices in priority order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {MOCK_COURSES.map((course) => {
              const isSelected = selectedCourses.some(c => c.id === course.id);
              const priority = selectedCourses.findIndex(c => c.id === course.id) + 1;

              return (
                <div key={course.id} className={`bg-slate-800/40 p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${isSelected ? 'border-orange-500 ring-1 ring-orange-500/50 shadow-lg shadow-orange-500/10' : 'border-slate-800 hover:border-slate-600'}`}>
                  <div>
                    <div className="mb-5 h-40 w-full overflow-hidden rounded-xl relative">
                      <img className={`w-full h-full object-cover transition-transform duration-700 ${isSelected ? 'scale-105' : 'group-hover:scale-105'}`} src={course.img} alt={course.title}/>
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full font-bold shadow-lg">
                          {priority}
                        </div>
                      )}
                    </div>
                    <span className={`text-xs font-bold tracking-widest uppercase mb-2 block ${isSelected ? 'text-orange-400' : 'text-slate-500'}`}>{course.department}</span>
                    <h3 className="text-xl font-serif mb-2 text-white">{course.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{course.desc}</p>
                  </div>
                  
                  <button 
                    onClick={() => toggleCourse(course)}
                    className={`w-full py-3 rounded-xl font-bold tracking-wide active:scale-95 transition-all flex items-center justify-center gap-2 ${isSelected ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-900/20'}`}
                  >
                    <span className="material-symbols-outlined text-base">{isSelected ? 'remove' : 'add'}</span>
                    {isSelected ? 'Remove Selected' : 'Add to Selection'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selection Order Sidebar */}
        <aside className="w-full lg:w-[400px] shrink-0">
          <div className="sticky top-28 bg-slate-800/80 p-8 rounded-[2rem] border border-slate-700 shadow-xl backdrop-blur-xl">
            <h3 className="text-2xl font-serif mb-2 text-white">Selection Order</h3>
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-8">Set your top 3 priorities</p>
            
            <div className="space-y-4 mb-10 min-h-[300px]">
              {selectedCourses.length === 0 ? (
                <div className="h-48 border-2 border-dashed border-slate-700 rounded-2xl flex flex-col items-center justify-center text-slate-500 gap-3">
                  <span className="material-symbols-outlined text-4xl opacity-50">format_list_numbered</span>
                  <span className="text-sm font-medium">Select courses to add priorities</span>
                  <span className="text-xs">0 / 3 Selected</span>
                </div>
              ) : (
                <>
                  {selectedCourses.map((course, index) => (
                    <div key={course.id} className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 flex items-center gap-4 transition-all hover:border-orange-500/50 group">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs ring-1 ring-orange-500/30">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">{course.title}</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">{course.department}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <button onClick={() => moveItem(index, 'up')} disabled={index === 0} className="text-slate-500 hover:text-white disabled:opacity-30 p-1"><span className="material-symbols-outlined text-[16px] block">keyboard_arrow_up</span></button>
                        <button onClick={() => moveItem(index, 'down')} disabled={index === selectedCourses.length - 1} className="text-slate-500 hover:text-white disabled:opacity-30 p-1"><span className="material-symbols-outlined text-[16px] block">keyboard_arrow_down</span></button>
                      </div>
                    </div>
                  ))}
                  
                  {/* Empty slots placeholders up to 3 */}
                  {Array.from({ length: 3 - selectedCourses.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="border-2 border-dashed border-slate-700/50 rounded-xl p-4 flex items-center justify-center text-slate-600 text-xs h-[74px]">
                       Priority {selectedCourses.length + i + 1} Slot Available
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-700/50">
              <div className="flex justify-between items-center px-1 text-sm border-b border-slate-700/50 pb-4 mb-4">
                <span className="text-slate-400">Application Status</span>
                <span className="text-orange-400 font-bold flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span> Drafting</span>
              </div>
              <button 
                onClick={handleSubmit}
                disabled={selectedCourses.length === 0}
                className="w-full py-4 bg-white text-slate-900 rounded-xl font-bold tracking-widest uppercase text-xs hover:bg-slate-200 transition-all shadow-lg shadow-white/5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Application
              </button>
              <p className="text-[10px] text-center text-slate-500 px-4 leading-relaxed mt-4">
                By submitting, you lock in your choices. Results will be processed according to availability and academic standing.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Application;
