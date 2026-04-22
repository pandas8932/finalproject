import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MarketplaceStorefront = () => {
  const navigate = useNavigate();
  // We can simulate dummy listings here to map
  const activeListings = [
    { id: 101, title: 'Intro to Macroeconomics Textbook', price: '$45.00', views: 12, img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=200&q=80' },
    { id: 102, title: 'Schwinn Mountain Bike - Matte Black', price: '$120.00', views: 48, img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=200&q=80' },
    { id: 103, title: 'Dorm Desk Lamp (LED Adjustable)', price: '$15.00', views: 5, img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=200&q=80' }
  ];

  return (
    <div className="bg-[#f9f9ff] font-body-md text-slate-800 min-h-screen">
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 h-16 w-full mx-auto">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/dashboard/marketplace')} className="p-2 hover:bg-gray-50 rounded-lg active:scale-95 duration-200 text-slate-500">
              <span className="material-symbols-outlined mt-0.5">arrow_back</span>
            </button>
            <span className="text-xl font-black tracking-tight text-emerald-600">My Storefront</span>
          </div>
          <div className="flex items-center gap-4">
             <button onClick={() => navigate('/dashboard/marketplace/post-item')} className="hidden sm:flex bg-[#006948] text-white border border-[#005137] hover:bg-[#005137] px-4 py-1.5 rounded-lg text-sm font-bold shadow-sm items-center gap-1.5 transition-colors">
                 <span className="material-symbols-outlined text-[16px]">add_circle</span> Post an Item
             </button>
             <button className="p-2 text-gray-500 hover:bg-gray-50 transition-colors rounded-full active:scale-95 duration-200">
               <span className="material-symbols-outlined">settings</span>
             </button>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6 md:p-10 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_4px_rgba(5,150,105,0.04)] border border-gray-100 flex flex-col justify-between">
            <span className="material-symbols-outlined text-[#006948] mb-4 text-[32px]">check_circle</span>
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Items Sold</div>
              <div className="text-4xl font-bold text-slate-800">14</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_4px_rgba(5,150,105,0.04)] border border-gray-100 flex flex-col justify-between">
            <span className="material-symbols-outlined text-blue-500 mb-4 text-[32px]">list_alt</span>
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Active Listings</div>
              <div className="text-4xl font-bold text-slate-800">6</div>
            </div>
          </div>
          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 shadow-[0_4px_12px_rgba(0,105,72,0.06)] flex flex-col justify-between">
            <span className="material-symbols-outlined text-emerald-600 mb-4 text-[32px]">payments</span>
            <div>
              <div className="text-xs font-bold text-emerald-700/80 uppercase tracking-wider mb-1">Total Earned</div>
              <div className="text-4xl font-bold text-emerald-700">$482.50</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-2 border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-bold text-slate-900">Active Listings</h2>
              <button className="text-[#006948] font-bold text-sm hover:underline flex items-center gap-1">
                View All <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {activeListings.map(listing => (
                 <div key={listing.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center">
                    <img className="w-24 h-24 sm:w-20 sm:h-20 rounded-lg object-cover shadow-sm bg-slate-50" src={listing.img} alt={listing.title} />
                    <div className="flex-1 min-w-0 w-full text-center sm:text-left">
                       <h3 className="font-bold text-slate-800 truncate mb-1">{listing.title}</h3>
                       <div className="text-[#006948] font-bold text-lg mb-1">{listing.price}</div>
                       <div className="text-xs text-gray-400 flex items-center justify-center sm:justify-start gap-1 font-medium">
                          <span className="material-symbols-outlined text-[14px]">visibility</span> {listing.views} views this week
                       </div>
                    </div>
                    <div className="flex flex-row w-full sm:w-auto gap-3 mt-2 sm:mt-0">
                       <button className="flex-1 px-5 py-2 text-sm font-bold bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors shadow-sm">Edit</button>
                       <button className="flex-1 px-5 py-2 text-sm font-bold bg-[#006948] text-white rounded-lg hover:bg-[#005137] transition-colors shadow-sm">Mark Sold</button>
                    </div>
                 </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-slate-200 pb-4">Recent Messages</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="divide-y divide-gray-50">
                <div className="p-5 hover:bg-slate-50 transition-colors cursor-pointer relative">
                  <div className="flex gap-4">
                    <div className="relative">
                      <img className="w-12 h-12 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80" alt="Jamie" />
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-slate-800">Jamie Chen</span>
                        <span className="text-xs text-emerald-600 font-bold">New</span>
                      </div>
                      <p className="text-sm text-slate-600 line-clamp-1 mb-2">Is the textbook still available for pickup tonight?</p>
                      <span className="inline-block text-[10px] bg-[#e7eefe] text-[#006c49] px-2.5 py-1 rounded-md font-bold truncate max-w-[150px]">Re: Economics Text...</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="flex gap-4">
                    <img className="w-12 h-12 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Marcus" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-slate-800">Marcus Thorne</span>
                        <span className="text-xs text-gray-400">1h ago</span>
                      </div>
                      <p className="text-sm text-slate-500 line-clamp-1 mb-2">Would you take $100 for the bike?</p>
                      <span className="inline-block text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-bold truncate max-w-[150px]">Re: Schwinn Bike...</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-slate-50/50 text-center border-t border-gray-100">
                <button className="text-sm font-bold text-[#006948] hover:underline">View all messages</button>
              </div>
            </div>

            <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100 shadow-sm mt-8">
              <div className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-amber-500 mt-0.5" style={{fontVariationSettings: "'FILL' 1"}}>shield_person</span>
                <div>
                  <h4 className="font-bold text-amber-900 text-sm mb-1">Safe Exchange Reminder</h4>
                  <p className="text-xs text-amber-800/80 leading-relaxed">Remember to meet in public campus zones like the Student Union for all exchange transactions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MarketplaceStorefront;
