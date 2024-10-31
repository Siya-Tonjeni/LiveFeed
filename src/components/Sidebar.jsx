import React, { useState } from 'react';

const Sidebar = ({ tasks }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Group tasks based on their progress level
  const justStartedTasks = tasks.filter((task) => task.progress < 40);
  const halfwayTasks = tasks.filter((task) => task.progress >= 40 && task.progress < 60);
  const almostDoneTasks = tasks.filter((task) => task.progress >= 60);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-900 w-64 h-screen p-5">
      <h2 className="text-2xl font-bold text-white mb-5">Projects</h2>

      {/* Dropdown for tasks */}
      <div className="text-white">
        <button
          onClick={toggleDropdown}
          className="w-full bg-gray-800 p-3 rounded-lg mb-4 text-left flex justify-between items-center"
        >
          Tasks
          <span>{isDropdownOpen ? '▲' : '▼'}</span>
        </button>

        {isDropdownOpen && (
          <div className="bg-gray-900 p-2 rounded-lg space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-red-500">Just Started ({justStartedTasks.length})</h3>
              <ul className="ml-4 list-disc">
                {justStartedTasks.map((task, index) => (
                  <li key={index} className="text-gray-400 hover:text-white transition-all">
                    {task.title}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-500">Halfway ({halfwayTasks.length})</h3>
              <ul className="ml-4 list-disc">
                {halfwayTasks.map((task, index) => (
                  <li key={index} className="text-gray-400 hover:text-white transition-all">
                    {task.title}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-500">Almost Done ({almostDoneTasks.length})</h3>
              <ul className="ml-4 list-disc">
                {almostDoneTasks.map((task, index) => (
                  <li key={index} className="text-gray-400 hover:text-white transition-all">
                    {task.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
