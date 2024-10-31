import React, {useState} from 'react';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import Navbar from './components/Navbar';

function App() {
  const [tasks, setTasks] = useState([]); 

  // Function to add a task
  const addTask = (task) => {
    setTasks([...tasks, { ...task, date: new Date().toLocaleDateString() }]);
  };

  // Function to delete a task
  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((task, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="h-screen flex">
      <aside className="w-1/4 bg-gray-900">
        <Sidebar tasks={tasks} />
      </aside>
      <main className="flex-grow bg-gradient-to-br from-purple-900 to-blue-800">
        <Navbar />
        <TaskList tasks={tasks} addTask={addTask} deleteTask={deleteTask} />
      </main>
    </div>
  );
}

export default App;
