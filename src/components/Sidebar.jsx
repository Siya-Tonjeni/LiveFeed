// import React from 'react';

// const Sidebar = () => {
//   return (
//     <div className="h-full bg-gray-900 text-white p-5 flex flex-col justify-between">
//       <div>
//         <h2 className="text-2xl font-bold mb-10">Projects</h2>
//         <ul>
//           <li className="mb-4">Team</li>
//           <li className="mb-4">Reminders</li>
//           <li className="mb-4">Messengers</li>
//         </ul>
//       </div>
      
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState } from 'react';

const Sidebar = ({ tasks }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-900 w-64 h-screen p-5">
      <h2 className="text-2xl font-bold text-white mb-5">Projects</h2>

      <div className="text-white">
        {/* Dropdown for tasks */}
        <div>
          <button
            onClick={toggleDropdown}
            className="w-full bg-gray-800 p-3 rounded-lg mb-4 text-left flex justify-between items-center"
          >
            Tasks
            <span>{isDropdownOpen ? '▲' : '▼'}</span>
          </button>

          {isDropdownOpen && (
            <ul className= "bg-gray-600 p-2 rounded-lg space-y-2">
              {tasks.length > 0 ? (
                tasks.map((task, index) => (
                  <li key={index} className="text-gray-400 hover:text-white transition-all">
                    {task.title}
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No tasks yet</p>
              )}
            </ul>
          )}
        </div>

        {/* Other sidebar content */}
        <ul className="mt-4">
          <li className="text-gray-400 hover:text-white transition-all">
            <a href="#">Team</a>
          </li>
          <li className="text-gray-400 hover:text-white transition-all">
            <a href="#">Reminders</a>
          </li>
          <li className="text-gray-400 hover:text-white transition-all">
            <a href="#">Messengers</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
