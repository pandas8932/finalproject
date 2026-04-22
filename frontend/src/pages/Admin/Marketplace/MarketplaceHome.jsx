import React from 'react';
import { useNavigate } from 'react-router-dom';

const MarketplaceHome = () => {
  const navigate = useNavigate();

  return (
    <div className="font-body-md text-on-surface bg-[#f9f9ff] min-h-screen">
      <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100 shadow-sm h-16 md:flex hidden">
        <div className="flex items-center justify-between px-6 h-16 w-full mx-auto">
          <div className="flex items-center gap-6">
            <button className="text-slate-500 hover:text-emerald-600 transition-colors">
              <span className="material-symbols-outlined text-[20px]">menu</span>
            </button>
          </div>
          <div className="flex-1 max-w-xl mx-8 hidden md:block">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">search</span>
              <input className="w-full bg-[#f0f3ff] border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-[#006948] outline-none" placeholder="Search textbooks, tech, and more..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <button className="text-emerald-600 font-bold border-2 border-emerald-600 hover:bg-emerald-50 px-4 py-1.5 rounded-lg text-sm bg-white" onClick={() => navigate('/dashboard/marketplace/storefront')}>My Storefront</button>
             <button className="p-2 text-gray-500 hover:bg-gray-50 transition-colors rounded-full active:scale-95 duration-200">
               <span className="material-symbols-outlined">notifications</span>
             </button>
          </div>
        </div>
      </header>

      <main className="w-full max-w-[1200px] mx-auto px-6 py-8">
        <section className="relative rounded-3xl overflow-hidden mb-12 aspect-[21/9] md:aspect-[3/1] bg-[#00855d] group">
          <img alt="Students working on campus" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"/>
          <div className="absolute inset-0 bg-gradient-to-r from-[#006948]/90 to-transparent flex flex-col justify-center p-8 md:p-12">
            <h1 className="font-bold text-white text-3xl md:text-5xl max-w-lg mb-6">Your Campus. Your Marketplace.</h1>
            <div className="flex flex-wrap gap-4">
              <div className="relative flex-1 min-w-[280px] max-w-md">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/70">search</span>
                <input className="w-full h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl pl-12 pr-4 text-white placeholder-white/70 focus:ring-white outline-none" placeholder="What are you looking for?" type="text"/>
              </div>
              <button onClick={() => navigate('/dashboard/marketplace/post-item')} className="bg-white text-[#006948] px-8 h-12 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all active:scale-95">
                Post Now
              </button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Browse Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group cursor-pointer bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-14 h-14 bg-[#e7eefe] rounded-full flex items-center justify-center mx-auto mb-3 text-[#006c49] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">menu_book</span>
              </div>
              <span className="font-bold text-sm">Textbooks</span>
            </div>
            <div className="group cursor-pointer bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-14 h-14 bg-[#e2e8f8] rounded-full flex items-center justify-center mx-auto mb-3 text-[#006c49] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">devices</span>
              </div>
              <span className="font-bold text-sm">Electronics</span>
            </div>
            <div className="group cursor-pointer bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-14 h-14 bg-[#ffdad7] rounded-full flex items-center justify-center mx-auto mb-3 text-[#9b3e3b] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">chair</span>
              </div>
              <span className="font-bold text-sm">Furniture</span>
            </div>
            <div className="group cursor-pointer bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-14 h-14 bg-[#85f8c4] rounded-full flex items-center justify-center mx-auto mb-3 text-[#005137] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">apparel</span>
              </div>
              <span className="font-bold text-sm">Clothing</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">New Near You</h3>
            <button className="text-[#006948] font-bold hover:underline">View all</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div onClick={() => navigate('/dashboard/marketplace/product/1')} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img alt="iPad Pro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80"/>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-md text-gray-400 hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span> STUDENT VERIFIED
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-1 truncate">iPad Pro 11-inch (2022)</h4>
                <p className="text-[#006948] font-bold text-xl">$550</p>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-50">
                  <img alt="Alex" className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80"/>
                  <span className="text-xs text-gray-500 font-medium">Alex • 0.5 miles away</span>
                </div>
              </div>
            </div>

            <div onClick={() => navigate('/dashboard/marketplace/product/2')} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img alt="Psychology Textbook" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80"/>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span> STUDENT VERIFIED
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-1 truncate">Modern Psychology (10th Ed)</h4>
                <p className="text-[#006948] font-bold text-xl">$45</p>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-50">
                  <img alt="Sarah" className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"/>
                  <span className="text-xs text-gray-500 font-medium">Sarah • 1.2 miles away</span>
                </div>
              </div>
            </div>

            <div onClick={() => navigate('/dashboard/marketplace/product/3')} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img alt="Ergonomic Chair" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=600&q=80"/>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span> STUDENT VERIFIED
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-1 truncate">Desk Chair - Like New</h4>
                <p className="text-[#006948] font-bold text-xl">$80</p>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-50">
                  <img alt="Marcus" className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"/>
                  <span className="text-xs text-gray-500 font-medium">Marcus • 2.0 miles away</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};
export default MarketplaceHome;
