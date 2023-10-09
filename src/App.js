import React, { useState } from 'react';
import './App.css'; // Add your styles

import LeftPanel from './components/LeftPanel';
import MiddlePanel from './components/MiddlePanel';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // Default filter is 'all'

  // Function to add a new task
  const addTask = (taskName) => {
    const newTask = { id: tasks.length + 1, name: taskName, status: 'pending' };
    setTasks([...tasks, newTask]);
  };

  // Function to filter tasks based on the selected filter
  const filterTasks = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  // Apply the filter to the tasks
  const filteredTasks = filter === 'all' ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className="App">
      <LeftPanel onAddTask={addTask} onFilterChange={filterTasks} />
      <MiddlePanel tasks={filteredTasks} />
      {/* Add your RightPanel component here */}
    </div>
  );
};

export default App;