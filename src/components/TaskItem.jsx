import React from 'react';
import { MdDelete } from "react-icons/md";

const TaskItem = ({ task, deleteTask }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg relative transform transition-transform duration-300 hover:scale-105 animate-fadeIn" style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
      <h3 className="text-lg font-bold text-white mb-2">{task.title}</h3>
      <p className="text-gray-300 mb-2">{task.smallDescription}</p>
      <p className="text-gray-400 mb-2">{task.date}</p>
      
      <div className="h-2 w-full bg-gray-700 rounded mb-2">
      
        <div
          className={`h-2 rounded transition-all duration-1000 ease-in-out ${
            task.progress < 40 ? 'bg-red-500' : task.progress < 60 ? 'bg-orange-500' : 'bg-green-500'
          }`}
          style={{ width: `${task.progress}%` }}
        />
        <p className="text-sm text-gray-600 mb-3">Progress: {(task.progress / 10).toFixed(1)} / 10</p>
      </div>

      <button
        onClick={deleteTask}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-600 transition duration-300 ease-in-out"
      >
        <MdDelete/>
      </button>
    </div>
  );
};

export default TaskItem;

