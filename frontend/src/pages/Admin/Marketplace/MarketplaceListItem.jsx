import React from 'react';
import { useNavigate } from 'react-router-dom';

const MarketplaceListItem = () => {
  const navigate = useNavigate();

  const handlePost = (e) => {
    e.preventDefault();
    navigate('/dashboard/marketplace/storefront');
  };

  return (
    <div className="bg-[#f9f9ff] font-body-md text-slate-800 min-h-screen">
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 h-16 w-full mx-auto">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/dashboard/marketplace')} className="p-2 hover:bg-gray-50 rounded-lg active:scale-95 duration-200 text-slate-500">
              <span className="material-symbols-outlined mt-0.5">close</span>
            </button>
            <span className="text-xl font-black tracking-tight text-emerald-600 hidden sm:block">CampusMarket</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-gray-400 font-bold text-xs bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100 hidden md:block">Draft Saved at 10:42 AM</span>
            <button className="text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg font-bold transition-colors text-sm" onClick={handlePost}>
                Post Item
            </button>
          </div>
        </div>
      </header>

      <main className="pt-10 pb-20 px-6 max-w-3xl mx-auto w-full">
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">List an Item</h1>
          <p className="text-slate-500 text-sm">Reach thousands of students on campus. Verification ensures a safe trade.</p>
        </div>

        <form onSubmit={handlePost} className="space-y-8">
          <section className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#006948] text-white flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-emerald-50">1</div>
              <h2 className="text-xl font-bold text-slate-800">Upload Photos</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-2 aspect-[4/3] md:aspect-auto md:h-48 border-2 border-dashed border-emerald-300 rounded-xl flex flex-col items-center justify-center p-4 bg-emerald-50/50 hover:bg-emerald-50 transition-colors cursor-pointer group">
                <span className="material-symbols-outlined text-[#006948] mb-2 text-[48px] group-hover:scale-110 transition-transform">add_a_photo</span>
                <p className="font-bold text-[#006948]">Add Main Photo</p>
                <p className="text-xs text-[#006948]/70 mt-1">Drag or click to upload</p>
              </div>
              <div className="aspect-[4/3] md:aspect-auto md:h-48 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-gray-400 text-3xl">add</span>
              </div>
              <div className="aspect-[4/3] md:aspect-auto md:h-48 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-gray-400 text-3xl">add</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-400 font-medium">Add up to 8 photos. High-quality images sell 3x faster.</p>
          </section>

          <section className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#006948] text-white flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-emerald-50">2</div>
              <h2 className="text-xl font-bold text-slate-800">Item Details</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block font-bold text-sm text-slate-700 mb-2">Listing Title</label>
                <input required className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#006948]/40 focus:border-[#006948] focus:bg-white text-sm font-medium outline-none transition-all shadow-sm" placeholder="e.g. Organic Chemistry Textbook - 5th Edition" type="text"/>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-bold text-sm text-slate-700 mb-2">Category</label>
                  <select required className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#006948]/40 focus:bg-white text-sm font-bold text-slate-600 outline-none shadow-sm cursor-pointer">
                    <option value="">Select Category</option>
                    <option>Books & Study Material</option>
                    <option>Electronics</option>
                    <option>Dorm Essentials</option>
                    <option>Clothing</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-sm text-slate-700 mb-2">Condition</label>
                  <select required className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#006948]/40 focus:bg-white text-sm font-bold text-slate-600 outline-none shadow-sm cursor-pointer">
                    <option value="">Select Condition</option>
                    <option>Brand New</option>
                    <option>Like New</option>
                    <option>Good</option>
                    <option>Fair</option>
                  </select>
                </div>
              </div>

              <div className="w-full sm:w-1/2">
                <label className="block font-bold text-sm text-slate-700 mb-2">Pricing</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">$</span>
                  <input required className="w-full h-12 pl-8 pr-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#006948]/40 focus:border-[#006948] focus:bg-white text-sm font-bold outline-none transition-all shadow-sm" placeholder="0.00" type="number" step="0.01"/>
                </div>
              </div>
              
              <div>
                <label className="block font-bold text-sm text-slate-700 mb-2">Detailed Description</label>
                <textarea rows="4" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#006948]/40 focus:border-[#006948] focus:bg-white text-sm font-medium outline-none transition-all shadow-sm" placeholder="Describe the item, note any flaws or important details that buyers should know..."></textarea>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#006948] text-white flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-emerald-50">3</div>
              <h2 className="text-xl font-bold text-slate-800">Pickup Details</h2>
            </div>
            
            <div className="mb-6">
              <label className="block font-bold text-sm text-slate-700 mb-4">Campus Location Preference</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex items-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-[#006948] hover:bg-emerald-50/30 transition-all">
                  <input defaultChecked className="w-5 h-5 text-[#006948] border-slate-300 focus:ring-[#006948]" name="location" type="radio"/>
                  <div className="ml-3">
                    <p className="font-bold text-sm text-slate-800">The Quad / Library</p>
                    <p className="font-medium text-xs text-slate-400 mt-0.5">Central, high visibility</p>
                  </div>
                </label>
                <label className="flex items-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-[#006948] hover:bg-emerald-50/30 transition-all">
                  <input className="w-5 h-5 text-[#006948] border-slate-300 focus:ring-[#006948]" name="location" type="radio"/>
                  <div className="ml-3">
                    <p className="font-bold text-sm text-slate-800">North Housing</p>
                    <p className="font-medium text-xs text-slate-400 mt-0.5">Near residential halls</p>
                  </div>
                </label>
                <label className="flex items-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-[#006948] hover:bg-emerald-50/30 transition-all">
                  <input className="w-5 h-5 text-[#006948] border-slate-300 focus:ring-[#006948]" name="location" type="radio"/>
                  <div className="ml-3">
                    <p className="font-bold text-sm text-slate-800">Student Union</p>
                    <p className="font-medium text-xs text-slate-400 mt-0.5">Inside the food court</p>
                  </div>
                </label>
                <label className="flex items-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-[#006948] hover:bg-emerald-50/30 transition-all">
                  <input className="w-5 h-5 text-[#006948] border-slate-300 focus:ring-[#006948]" name="location" type="radio"/>
                  <div className="ml-3">
                    <p className="font-bold text-sm text-slate-800">Other / DM me</p>
                    <p className="font-medium text-xs text-slate-400 mt-0.5">Specify in chat</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="bg-blue-50 text-blue-800 p-4 rounded-xl flex gap-3 items-start border border-blue-100">
              <span className="material-symbols-outlined flex-shrink-0 text-blue-500 mt-0.5" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
              <p className="font-medium text-xs leading-relaxed">Only verified students from your university will be able to see your specific pickup preferences and request to message you.</p>
            </div>
          </section>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-end border-t border-slate-200 pt-8">
            <button type="button" onClick={() => navigate('/dashboard/marketplace')} className="w-full sm:w-auto px-8 py-3 font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-all shadow-sm">
                Cancel
            </button>
            <button type="submit" className="w-full sm:w-auto px-10 py-3 font-bold text-white bg-[#006948] shadow-md hover:bg-[#005137] rounded-xl transition-all">
                Publish Listing
            </button>
          </div>
        </form>

      </main>
    </div>
  );
};

export default MarketplaceListItem;
