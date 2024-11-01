// import React, {useState} from 'react';
// import Sidebar from './components/Sidebar';
// import TaskList from './components/TaskList';
// import Navbar from './components/Navbar';

// function App() {
//   const [tasks, setTasks] = useState([]); 

//   // Function to add a task
//   const addTask = (task) => {
//     setTasks([...tasks, { ...task, date: new Date().toLocaleDateString() }]);
//   };

//   // Function to delete a task
//   const deleteTask = (indexToDelete) => {
//     const updatedTasks = tasks.filter((task, index) => index !== indexToDelete);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="h-screen flex">
//       <aside className="w-1/4 bg-gray-900">
//         <Sidebar tasks={tasks} />
//       </aside>
//       <main className="flex-grow bg-gradient-to-br from-purple-900 to-blue-800">
//         <Navbar />
//         <TaskList tasks={tasks} addTask={addTask} deleteTask={deleteTask} />
//       </main>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import Navbar from './components/Navbar';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

function App() {
  const [tasks, setTasks] = useState([]); 

  // Fetch tasks from Firestore on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(collection(db, 'tasks'));
      const tasksFromFirestore = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksFromFirestore);
    };
    fetchTasks();
  }, []);

  // Function to add a task to Firestore and update local state
  const addTask = async (task) => {
    const docRef = await addDoc(collection(db, 'tasks'), task);
    setTasks([...tasks, { ...task, id: docRef.id }]);
  };

  // Function to delete a task from Firestore and update local state
  const deleteTask = async (taskId) => {
    await deleteDoc(doc(db, 'tasks', taskId));
    setTasks(tasks.filter((task) => task.id !== taskId));
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
