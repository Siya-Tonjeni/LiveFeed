import React, { useState } from 'react';
import TaskItem from './TaskItem';
 
const TaskList = ({ tasks, addTask, deleteTask }) => {
  const [task, setTask] = useState({
    title: '',
    smallDescription: '',
    progress: '',
    date: '',
  });

  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim()) {
      addTask(task);
      setTask({ title: '', smallDescription: '', progress: 0 });
      setShowForm(false); 
    }
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="p-8 text-white">
      <h2 className="text-3xl font-bold text-white mb-5">Welcome to LiveFeed 👋</h2>

      <button
        onClick={handleToggleForm}
        className="p-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg mb-4"
      >
        {showForm ? 'Cancel' : 'Add Task'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-6">
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Task title"
            className="p-3 bg-gray-800 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="smallDescription"
            value={task.smallDescription}
            onChange={handleChange}
            placeholder="Small description"
            className="p-3 bg-gray-800 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="number"
            name="progress"
            value={task.progress}
            onChange={handleChange}
            placeholder="Progress (0 - 100)"
            max="100"
            min="0"
            className="p-3 bg-gray-800 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="p-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg"
          >
            Submit Task
          </button>
        </form>
      )}

      <div className="grid grid-cols-3 gap-4">
        {tasks.length > 0 ? (
          tasks.map((taskItem, index) => (
            <TaskItem 
              key={index} 
              task={taskItem} 
              deleteTask={() => deleteTask(index)} 
            />
          ))
        ) : (
          <p className="text-gray-400">No tasks added yet.</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
