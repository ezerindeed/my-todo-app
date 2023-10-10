import React, { useState } from 'react';

import './styles/LeftPanel.css'
import './styles/MiddlePanel.css'
import './styles/normalize.css';
import './styles/RightPanel.css'
import './styles/Task.css'
import './App.css';


import LeftPanel from './components/LeftPanel';
import MiddlePanel from './components/MiddlePanel';
import RightPanel from './components/RightPanel';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // Default filter is 'all'

  // Function to add a new task
  const addTask = (taskName) => {
    const newTask = { id: tasks.length + 1, name: taskName, status: 'pending' };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' } : task
      )
    );
  };
  
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
  

  // Function to filter tasks based on the selected filter
  const filterTasks = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  // Apply the filter to the tasks
  const filteredTasks = filter === 'all' ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className="App">
      <LeftPanel 
      onAddTask={addTask} 
      onFilterChange={filterTasks} />
      <MiddlePanel tasks={filteredTasks} 
      onCompleteTask={completeTask} 
      onDeleteTask={deleteTask} />
      <RightPanel />
    </div>
  );
};

export default App;