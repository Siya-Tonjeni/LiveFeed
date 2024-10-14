import React from 'react';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="h-screen flex">
      <aside className="w-1/4 bg-gray-900">
        <Sidebar />
      </aside>
      <main className="flex-grow bg-gradient-to-br from-purple-900 to-blue-800">
        <Navbar />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
