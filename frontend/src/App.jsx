import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Admin/Dashboard';

function App() {
  return (
    <div className="bg-background min-h-screen text-on-surface font-body-md flex">
      <Sidebar />
      <main className="w-full min-h-screen flex flex-col">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
