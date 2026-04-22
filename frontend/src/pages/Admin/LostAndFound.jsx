import React, { useState } from 'react';

const Topbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full h-16 bg-white border-b border-slate-100 flex justify-between items-center px-6">
      <div className="flex items-center gap-6">
        <button className="text-slate-500 hover:text-indigo-600 transition-colors">
          <span className="material-symbols-outlined text-[20px]">menu</span>
        </button>
      </div>
      
      <div className="flex-1 max-w-xl px-4 hidden md:block">
        <div className="relative">
           <span className="absolute left-6 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[18px]">search</span>
           <input type="text" placeholder="Search lost or found items..." className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-shadow" />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button className="relative w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-full transition-colors group">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-1 right-1 w-2.5 h-2.5 flex items-center justify-center text-[8px] font-bold text-white bg-red-500 border-2 border-white rounded-full group-hover:scale-125 transition-transform">5</span>
        </button>
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrCDi0fXyt4oAdRBqETmswl30NeVmueNWSeUe3MwuXR4Lp6eynizRvAUGe13xkzWMaIzl-ya3_1rbP316xIy88rg2N6RlPRgJa-iNifmIpegv63jm7vYLRxHr8H31jjvTAAtDbISgaKGt7TuhoKKh5Q-EtnWgb73I_hU1xDuHt4x1JVIqQe1vQ525x9nz1jDCPeYjDuxzqcPtAnSIEdlD8ok2XZP9wSAtR4iatB5PtdSmzxF9ZNrYpz5E06OctjW4N2ilDOOXTKk0c" alt="User" className="w-8 h-8 rounded-full object-cover" />
          <div className="hidden sm:block text-left">
            <h4 className="text-xs font-bold text-slate-800 leading-tight">CHEKURIPREMSAI</h4>
            <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
               Student <span className="material-symbols-outlined text-[14px]">expand_more</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const LostAndFound = () => {
  const [showLostModal, setShowLostModal] = useState(false);
  const [showFoundModal, setShowFoundModal] = useState(false);

  // Initial Seed Data converted to state
  const [gridItems, setGridItems] = useState([
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=400&q=80',
      status: 'FOUND',
      statusColor: 'bg-emerald-100 text-emerald-700',
      title: 'Sony Headphones WH-CH720N',
      location: 'Library - 2nd Floor',
      category: 'Electronics',
      categoryColor: 'bg-emerald-50 text-emerald-600',
      date: 'May 18, 2025',
      time: '2:30 PM',
      reporter: 'Rahul Sharma'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=400&q=80',
      status: 'LOST',
      statusColor: 'bg-red-500 text-white',
      title: 'Black Leather Wallet',
      location: 'Cafeteria',
      category: 'Wallets & Keys',
      categoryColor: 'bg-fuchsia-50 text-fuchsia-600',
      date: 'May 17, 2025',
      time: '11:15 AM',
      reporter: 'Anjali Verma'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80',
      status: 'FOUND',
      statusColor: 'bg-emerald-100 text-emerald-700',
      title: 'Steel Water Bottle',
      location: 'Sports Complex',
      category: 'Other',
      categoryColor: 'bg-blue-50 text-blue-600',
      date: 'May 16, 2025',
      time: '4:45 PM',
      reporter: 'Vikash Kumar'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80',
      status: 'LOST',
      statusColor: 'bg-red-500 text-white',
      title: 'Round Frame Glasses',
      location: 'Classroom Block B',
      category: 'Accessories',
      categoryColor: 'bg-purple-50 text-purple-600',
      date: 'May 16, 2025',
      time: '9:30 AM',
      reporter: 'Neha Reddy'
    }
  ]);

  // Form States
  const [lostForm, setLostForm] = useState({ title: '', location: '', category: 'Electronics', date: '', description: '' });

  const handleLostSubmit = (e) => {
    e.preventDefault();
    if (!lostForm.title) return;
    
    // Inject the new item directly into state!
    const newItem = {
      id: Date.now(),
      image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=400&q=80', // default generic proxy image
      status: 'LOST',
      statusColor: 'bg-red-500 text-white',
      title: lostForm.title,
      location: lostForm.location || 'Campus Property',
      category: lostForm.category,
      categoryColor: 'bg-slate-100 text-slate-700',
      date: lostForm.date || 'Today',
      time: 'Just Now',
      reporter: 'CHEKURIPREMSAI (You)'
    };
    
    setGridItems([newItem, ...gridItems]); // Add to top
    
    // Clear and close
    setLostForm({ title: '', location: '', category: 'Electronics', date: '', description: '' });
    setShowLostModal(false);
  };

  return (
    <div className="w-full bg-[#f8f9fc] font-inter min-h-screen">
      <Topbar />
      
      <div className="p-6 md:p-10 max-w-[1600px] mx-auto">
        
        {/* Sleeker Header Row replacing the huge bulky boxes */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-slate-200 pb-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                   <span className="material-symbols-outlined text-indigo-600 text-[32px]">manage_search</span> 
                   Campus Lost & Found
                </h1>
                <p className="text-slate-500 text-sm mt-2 font-medium">Easily report and recover items mislaid within the campus boundaries.</p>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
                <button onClick={() => setShowLostModal(true)} className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-red-50 text-red-600 border border-red-200 hover:bg-red-500 hover:text-white font-bold py-2.5 px-6 rounded-xl transition-all shadow-sm">
                   <span className="material-symbols-outlined text-[20px]">campaign</span> Report Lost
                </button>
                <button onClick={() => setShowFoundModal(true)} className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-500 hover:text-white font-bold py-2.5 px-6 rounded-xl transition-all shadow-sm">
                   <span className="material-symbols-outlined text-[20px]">check_circle</span> Report Found
                </button>
            </div>
        </div>

        {/* Clean 3-Box Overview Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border-l-4 border-l-red-500 border-y border-r border-slate-200 p-6 rounded-r-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
                <div>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Items Currently Lost</p>
                   <h2 className="text-3xl font-bold text-slate-900">24</h2>
                </div>
                <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center"><span className="material-symbols-outlined text-[24px]">search</span></div>
            </div>
            
            <div className="bg-white border-l-4 border-l-emerald-500 border-y border-r border-slate-200 p-6 rounded-r-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
                <div>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Items Recovered</p>
                   <h2 className="text-3xl font-bold text-slate-900">156</h2>
                </div>
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center"><span className="material-symbols-outlined text-[24px]">inventory_2</span></div>
            </div>
            
            <div className="bg-white border-l-4 border-l-blue-500 border-y border-r border-slate-200 p-6 rounded-r-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
                <div>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Successfully Returned</p>
                   <h2 className="text-3xl font-bold text-slate-900">68</h2>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center"><span className="material-symbols-outlined text-[24px]">handshake</span></div>
            </div>
        </div>

        {/* Searching & Filtering Panel */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 pt-4 border-t border-slate-100">
           <div className="flex items-center bg-white p-1 border border-slate-200 rounded-full shadow-sm w-full lg:w-auto overflow-x-auto custom-scrollbar">
              <button className="px-5 py-2 text-xs font-bold text-white bg-indigo-600 rounded-full shadow whitespace-nowrap">All Items</button>
              <button className="px-5 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-50 rounded-full transition-colors whitespace-nowrap border-r border-slate-100">Only Lost</button>
              <button className="px-5 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-50 rounded-full transition-colors whitespace-nowrap">Only Found</button>
           </div>
           
           <div className="flex items-center gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-64">
                 <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[18px]">search</span>
                 <input type="text" placeholder="Search by name..." className="w-full bg-white border border-slate-200 rounded-lg py-2 pl-9 pr-4 text-xs font-medium focus:ring-2 focus:ring-indigo-500 shadow-sm" />
              </div>
              <select className="bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs font-bold text-slate-600 shadow-sm outline-none cursor-pointer">
                 <option>Filter Category</option>
                 <option>Electronics</option>
                 <option>Accessories</option>
              </select>
           </div>
        </div>

        {/* Dynamic Item Cards Grid (Pulls from state) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {gridItems.map((item) => (
              <div key={item.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-slate-100">
                     <span className={`absolute top-3 left-3 z-10 px-3 py-1 text-[9px] uppercase tracking-widest font-black rounded-sm shadow-md ${item.statusColor}`}>{item.status}</span>
                     <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  <div className="p-5 flex flex-col flex-1">
                     <h3 className="font-bold text-slate-900 text-sm mb-1 line-clamp-1">{item.title}</h3>
                     <p className="text-xs font-medium text-slate-500 flex items-center gap-1.5 mb-4"><span className="material-symbols-outlined text-[14px] text-slate-400">location_on</span> {item.location}</p>
                     <span className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold ${item.categoryColor} w-max mb-5`}>{item.category}</span>
                     
                     <div className="mt-auto pt-4 border-t border-slate-100 space-y-3">
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400">
                            <span className="material-symbols-outlined text-[14px]">calendar_today</span> {item.date} <span className="inline-block w-1 h-1 bg-slate-200 rounded-full mx-1"></span> {item.time}
                        </div>
                        <div className="flex items-center justify-between text-xs w-full group/btn cursor-pointer bg-slate-50 hover:bg-indigo-50 p-2 rounded-lg transition-colors border border-slate-100">
                            <div className="flex items-center gap-1.5 text-slate-700 font-bold"><span className="material-symbols-outlined text-[16px] text-indigo-500">account_circle</span> {item.reporter}</div>
                            <span className="material-symbols-outlined text-[16px] text-indigo-600 transition-colors">arrow_forward</span>
                        </div>
                     </div>
                  </div>
              </div>
           ))}
        </div>

      </div>

      {/* Fully Functional Lost Modal Form tied to State */}
      {showLostModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
           <form onSubmit={handleLostSubmit} className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-red-50 text-red-600">
                 <h2 className="font-bold text-lg flex items-center gap-2">
                    <span className="material-symbols-outlined">campaign</span> Report Misplaced Item
                 </h2>
                 <button type="button" onClick={() => setShowLostModal(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100/50 hover:bg-red-200 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">close</span>
                 </button>
              </div>
              
              <div className="p-6 space-y-4">
                 <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Item Name *</label>
                    <input required type="text" value={lostForm.title} onChange={e => setLostForm({...lostForm, title: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500/50 transition-all" placeholder="E.g., AirPods Pro Generation 2" />
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Date Lost</label>
                        <input type="date" value={lostForm.date} onChange={e => setLostForm({...lostForm, date: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/30" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Category</label>
                        <select value={lostForm.category} onChange={e => setLostForm({...lostForm, category: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm font-bold text-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500/30">
                           <option>Electronics</option>
                           <option>Wallets & Keys</option>
                           <option>Books & Papers</option>
                           <option>Accessories</option>
                        </select>
                    </div>
                 </div>
                 
                 <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Expected Lost Location</label>
                    <input type="text" value={lostForm.location} onChange={e => setLostForm({...lostForm, location: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/30" placeholder="E.g., Basketball Court Area" />
                 </div>
              </div>
              
              <div className="p-5 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                 <button type="button" onClick={() => setShowLostModal(false)} className="px-5 py-2 font-bold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors text-sm shadow-sm">Cancel</button>
                 <button type="submit" className="px-6 py-2 font-bold text-white bg-red-500 hover:bg-red-600 border border-red-600 rounded-lg shadow-sm transition-colors text-sm">Post Alert</button>
              </div>
           </form>
        </div>
      )}

      {/* Found Modal - Mockup skeleton since user only mentioned checking Lost functionality */}
      {showFoundModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
           <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-emerald-50 text-emerald-700">
                 <h2 className="font-bold text-lg flex items-center gap-2">
                    <span className="material-symbols-outlined">check_circle</span> Report Discovered Item
                 </h2>
                 <button onClick={() => setShowFoundModal(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100/50 hover:bg-emerald-200 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">close</span>
                 </button>
              </div>
              <div className="p-6">
                 <p className="text-sm font-medium text-slate-500 text-center py-10">Found form coming soon! Just testing 'Report Lost' logic perfectly today.</p>
              </div>
           </div>
        </div>
      )}

    </div>
  );
};

export default LostAndFound;
