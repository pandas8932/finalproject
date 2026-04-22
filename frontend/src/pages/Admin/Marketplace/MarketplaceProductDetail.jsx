import React from 'react';
import { useNavigate } from 'react-router-dom';

const MarketplaceProductDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f9f9ff] text-slate-800 font-body-md antialiased min-h-screen">
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 h-16 w-full mx-auto">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/dashboard/marketplace')} className="p-2 hover:bg-gray-50 rounded-lg active:scale-95 duration-200 text-slate-500">
              <span className="material-symbols-outlined mt-0.5">arrow_back</span>
            </button>
            <span className="text-xl font-black tracking-tight text-emerald-600">CampusMarket</span>
          </div>
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-gray-50 border-gray-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none" placeholder="Search for textbooks, electronics..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <nav className="flex items-center gap-2 mb-8 text-gray-500 text-xs">
          <span className="cursor-pointer hover:underline" onClick={()=>navigate('/dashboard/marketplace')}>Marketplace</span>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span>Books & Study Material</span>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-slate-800 font-bold">Organic Chemistry</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shadow-sm border border-gray-100">
                <img alt="Organic Chemistry Textbook" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80"/>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden border-2 border-[#006948] cursor-pointer">
                  <img alt="Main View" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80"/>
                </div>
                <div className="aspect-square rounded-lg overflow-hidden border border-gray-100 hover:border-[#00855d] transition-colors cursor-pointer">
                  <img alt="Side View" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80"/>
                </div>
                <div className="aspect-square rounded-lg overflow-hidden border border-gray-100 hover:border-[#00855d] transition-colors cursor-pointer">
                  <img alt="Detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80"/>
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-100 cursor-pointer">
                  <img alt="More" className="w-full h-full object-cover blur-[2px]" src="https://images.unsplash.com/photo-1588580000645-4562a6d2c839?auto=format&fit=crop&w=400&q=80"/>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-lg">+2</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-wider">Books</span>
                  <div className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    <span>Verified Student Seller</span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-3 leading-tight">Organic Chemistry Textbook - 5th Edition</h1>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-[#006948]">$45.00</span>
                  <span className="px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-bold border border-slate-200">Like New</span>
                </div>
              </div>

              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 border-2 border-emerald-50">
                    <img alt="Seller Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"/>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 text-lg">David Chen</h4>
                    <p className="text-xs text-gray-500 font-medium">Bio-Chemistry Major • Senior</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-amber-500 justify-end">
                      <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="font-bold">4.9</span>
                    </div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter mt-0.5">12 Sales</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => alert("Chat functionality coming soon!")} className="flex items-center justify-center gap-2 bg-[#006948] text-white py-3.5 rounded-xl font-bold hover:bg-[#005137] transition-colors active:scale-95 shadow-md">
                    <span className="material-symbols-outlined text-[20px]">chat_bubble</span> Message
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-slate-200 text-slate-600 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-colors active:scale-95 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">bookmark</span> Save
                  </button>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="font-bold text-xl text-slate-800">Description</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Used this for Chem 201 last semester. The book is in pristine condition—no highlighting, no coffee stains, and the binding is completely intact. Includes the unused online access code for the digital practice problems. Perfect for anyone taking the class with Dr. Miller.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-600 bg-emerald-50 p-2 rounded-full">location_on</span>
                  <div>
                    <p className="font-bold text-slate-800 text-sm mb-0.5">Pickup Area</p>
                    <p className="text-xs text-gray-500">Student Union / Library</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-blue-600 bg-blue-50 p-2 rounded-full">schedule</span>
                  <div>
                    <p className="font-bold text-slate-800 text-sm mb-0.5">Posted</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default MarketplaceProductDetail;
