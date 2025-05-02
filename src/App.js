import React, { useState } from 'react';
import { FaBars, FaClipboard, FaPlus, FaFileAlt, FaFolderPlus, FaHome, FaBookOpen, FaQuestionCircle } from 'react-icons/fa';



export default function TradeJournalApp() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-width duration-300 bg-blue-900 text-white flex-shrink-0`}>  
        <div className="flex items-center px-4 py-6">
          <span className={`${sidebarOpen ? 'block' : 'hidden'} text-2xl font-bold`}>CHART<span className="text-green-400">MAZE</span></span>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="ml-auto focus:outline-none hover:text-green-400 transition"
          >
            <FaBars size={20} />
          </button>
        </div>
        
        <nav className="mt-4">
          <NavItem icon={<FaBookOpen />} label="My Rule Book" sidebarOpen={sidebarOpen} />
          <NavItem icon={<FaPlus />} label="Add Trades" sidebarOpen={sidebarOpen} />
          <NavItem icon={<FaClipboard />} label="Manage Trades" sidebarOpen={sidebarOpen} />
          <NavItem icon={<FaFolderPlus />} label="Open Positions" sidebarOpen={sidebarOpen} />
          <NavItem icon={<FaHome />} label="Dashboard" sidebarOpen={sidebarOpen} />
          <NavItem icon={<FaFileAlt />} label="Trade Diary" sidebarOpen={sidebarOpen} active />
          <NavItem icon={<FaClipboard />} label="ChartsMaze Screener" sidebarOpen={sidebarOpen} />
          <NavItem icon={<FaQuestionCircle />} label="Help or Feedback" sidebarOpen={sidebarOpen} />
        </nav>

        <div className="mt-auto px-4 py-6">
          <button className="w-full py-2 bg-green-400 hover:bg-green-500 rounded-full font-semibold transition-colors login-btn">
            {sidebarOpen ? 'Login' : <FaClipboard />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto main-content">
        <header className="flex items-center px-8 py-4 bg-white shadow">
          <h1 className="flex-1 text-xl font-bold text-blue-600">Welcome to ChartsMaze Trade Journal</h1>
        </header>

        <main className="p-8">
          {/* Welcome Section with Login Button */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-700 mb-6">
              To start tracking your trades and get valuable insights into your trading performance, please log in to your account.
            </p>
            
            <div className="flex justify-center">
              <button className="px-6 py-3 bg-green-400 hover:bg-green-500 text-white font-semibold rounded-full shadow-lg transition-colors login-btn">
                Log in to Continue
              </button>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center text-lg font-semibold text-gray-800 mb-6">See How It Works</h2>
            
           

            {/* YouTube Video Embed */}
            <div className="aspect-video bg-black rounded-lg shadow-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/re2zTJyJqDg?start=1"
                title="How it works"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false, sidebarOpen }) {
  return (
    <div className={`flex items-center px-4 py-3 ${active ? 'bg-blue-700' : 'hover:bg-blue-800'} cursor-pointer transition`}>
      <span className="text-lg">{icon}</span>
      {sidebarOpen && <span className="ml-3 font-medium">{label}</span>}
    </div>
  );
}