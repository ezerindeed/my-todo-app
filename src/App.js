import React, { useState } from 'react';
import './App.css';

import LeftPanel from './components/LeftPanel';
import MiddlePanel from './components/MiddlePanel';
import RightPanel from './components/RightPanel';
import Task from './components/Task'; // Import the updated Task component

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (taskName) => {
    const newTask = { id: tasks.length + 1, name: taskName, status: 'pending' };
    setTasks([...tasks, newTask]);
  };

  const filterTasks = (selectedFilter) => {
    setFilter(selectedFilter);
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

  const filteredTasks = filter === 'all' ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className="App">
      <LeftPanel onAddTask={addTask} onFilterChange={filterTasks} />
      <MiddlePanel>
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onCompleteTask={completeTask}
            onDeleteTask={deleteTask}
          />
        ))}
      </MiddlePanel>
      {/* Add your RightPanel component here */}
    </div>
  );
};

export default App;