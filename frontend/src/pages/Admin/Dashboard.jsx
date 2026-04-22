import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

const Dashboard = () => {
  const [materials, setMaterials] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from our Node.js Backend API
    const fetchData = async () => {
      try {
        const matRes = await fetch('http://localhost:5000/api/academic/materials');
        const matData = await matRes.json();
        const attRes = await fetch('http://localhost:5000/api/academic/attendance');
        const attData = await attRes.json();

        setMaterials(matData);
        setAttendance(attData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data', err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <Navbar />
      <div className="p-8 max-w-[1440px] mx-auto space-y-8">
        
        {/* Profile Header section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-xl p-8 shadow-sm relative overflow-hidden flex flex-col md:flex-row gap-8">
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Active Enrollment</span>
            </div>
            <div className="relative">
              <img alt="Student photo" className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrCDi0fXyt4oAdRBqETmswl30NeVmueNWSeUe3MwuXR4Lp6eynizRvAUGe13xkzWMaIzl-ya3_1rbP316xIy88rg2N6RlPRgJa-iNifmIpegv63jm7vYLRxHr8H31jjvTAAtDbISgaKGt7TuhoKKh5Q-EtnWgb73I_hU1xDuHt4x1JVIqQe1vQ525x9nz1jDCPeYjDuxzqcPtAnSIEdlD8ok2XZP9wSAtR4iatB5PtdSmzxF9ZNrYpz5E06OctjW4N2ilDOOXTKk0c"/>
              <button className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-2 rounded-lg shadow-xl hover:bg-indigo-700 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <p className="text-indigo-600 font-semibold text-label-md mb-1">STUDENT ID: #EC-2024-8892</p>
                <h1 className="text-headline-xl text-slate-900">Julian Alexander Vance</h1>
                <p className="text-slate-500 text-body-lg flex items-center gap-2 mt-1">
                  <span className="material-symbols-outlined text-indigo-400">location_on</span> Seattle, Washington • Junior Year
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-t border-slate-50">
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">GPA</p>
                  <p className="text-headline-md text-slate-800">3.92</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Attendance</p>
                  {/* Calculate Dynamic Attendance using seeded DB */}
                  <p className="text-headline-md text-emerald-600">
                    {loading ? '...' : (attendance.length > 0 ? `${((attendance.filter(a => a.status === 'Present').length / attendance.length) * 100).toFixed(0)}%` : '96.4%')}
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Credits</p>
                  <p className="text-headline-md text-slate-800">112/120</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Rank</p>
                  <p className="text-headline-md text-indigo-600">#4/210</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-primary-container text-white rounded-xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-indigo-400" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                Academic Standing
              </h3>
              <p className="text-slate-400 text-body-md leading-relaxed">
                Julian is currently in the top 2% of the Computer Science faculty. No disciplinary actions recorded for the academic year 2023-2024.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              <button className="w-full py-3 bg-white text-primary-container font-bold rounded-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">download</span> Export Transcript
              </button>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-slate-200 overflow-x-auto pb-px">
          <button className="px-4 py-3 text-indigo-600 font-semibold border-b-2 border-indigo-600 text-sm whitespace-nowrap transition-all">Academic Overview</button>
          <button className="px-4 py-3 text-slate-500 hover:text-slate-900 font-medium text-sm whitespace-nowrap transition-all">Attendance History</button>
          <button className="px-4 py-3 text-slate-500 hover:text-slate-900 font-medium text-sm whitespace-nowrap transition-all">Disciplinary Records</button>
        </div>

        {/* Dynamic content from Database */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
                <h3 className="text-headline-md text-slate-900">Current Semester Materials (From DB)</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50/50 text-slate-500 uppercase text-[10px] font-bold tracking-widest">
                    <tr>
                      <th className="px-6 py-4">Title</th>
                      <th className="px-6 py-4">Subject</th>
                      <th className="px-6 py-4">Unit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {materials.length === 0 && (
                      <tr><td colSpan="3" className="p-4 text-center text-slate-500">No materials loaded yet.</td></tr>
                    )}
                    {materials.map((mat, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                              <span className="material-symbols-outlined">menu_book</span>
                            </div>
                            <div>
                              <p className="font-bold text-slate-800">{mat.title}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-slate-600 text-sm">{mat.subject}</td>
                        <td className="px-6 py-5">
                          <span className="text-headline-md font-bold text-slate-900">0{mat.unit}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-8 shadow-sm">
                <h3 className="text-headline-md text-slate-900 mb-6">Database Recorded Attendance</h3>
                <div className="space-y-4">
                   {attendance.map((att, index) => (
                      <div key={index} className="flex justify-between items-center p-4 border rounded-lg bg-slate-50">
                        <div>
                          <p className="font-bold text-slate-800">{att.subject}</p>
                          <p className="text-xs text-slate-500">{new Date(att.date).toDateString()}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${att.status === 'Present' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                           {att.status}
                        </span>
                      </div>
                   ))}
                </div>
            </div>

          </div>
          
          <div className="space-y-6">
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-indigo-500 text-lg">contact_mail</span>
                Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1"><span className="material-symbols-outlined text-slate-400 text-lg">alternate_email</span></div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Email Address</p>
                    <p className="text-sm text-slate-800 font-medium">j.vance@educore.edu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-indigo-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-indigo-700 active:scale-90 transition-all group overflow-hidden">
          <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-90">add</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
