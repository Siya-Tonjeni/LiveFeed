import React, { useState } from 'react';
import TaskItem from './TaskItem';
 
const TaskList = ({ tasks, addTask, deleteTask }) => {
  // State to store task inputs
  const [task, setTask] = useState({
    title: '',
    smallDescription: '',
    progress: '',
    date: '',
  });

  // State to toggle form visibility
  const [showForm, setShowForm] = useState(false);

  // State to store all tasks
  // const [tasks, setTasks] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  // Handle form submission to add a task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim()) {
      addTask(task);
      setTask({ title: '', smallDescription: '', progress: 0 });
      setShowForm(false); // Hide form after submitting a task
    }
  };

  // Handle task deletion by index
  // const deleteTask = (indexToDelete) => {
  //   const updatedTasks = tasks.filter((task, index) => index !== indexToDelete);
  //   setTasks(updatedTasks);
  // };

  // Toggle form visibility
  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="p-8 text-white">
      <h2 className="text-3xl font-bold text-white mb-5">Welcome to LiveFeed 👋</h2>

      {/* Add Task Button */}
      <button
        onClick={handleToggleForm}
        className="p-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg mb-4"
      >
        {showForm ? 'Cancel' : 'Add Task'}
      </button>

      {/* Task input form, visible only if showForm is true */}
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

          {/* Progress input with label */}
          {/* <label className="text-gray-400" htmlFor="progress">
            Progress (0 - 100)
          </label> */}
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

      {/* Display tasks */}
      <div className="grid grid-cols-3 gap-4">
        {tasks.length > 0 ? (
          tasks.map((taskItem, index) => (
            <TaskItem 
              key={index} 
              task={taskItem} 
              deleteTask={() => deleteTask(index)} // Pass delete function with the index
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
