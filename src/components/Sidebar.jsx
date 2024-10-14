import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-full bg-gray-900 text-white p-5 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-10">Projects</h2>
        <ul>
          <li className="mb-4">Team</li>
          <li className="mb-4">Reminders</li>
          <li className="mb-4">Messengers</li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
