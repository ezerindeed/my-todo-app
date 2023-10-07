import React, { useState } from 'react';

import '../styles/LeftPanel.css'

const LeftPanel = ({ onAddTask, onFilterChange }) => {
  const [taskName, setTaskName] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      onAddTask(taskName);
      setTaskName('');
    }
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="left-panel">
      <h2>Add Task</h2>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
      <h2>Filter Tasks</h2>
      <button className={selectedFilter === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>
        All
      </button>
      <button className={selectedFilter === 'completed' ? 'active' : ''} onClick={() => handleFilterChange('completed')}>
        Completed
      </button>
      <button className={selectedFilter === 'pending' ? 'active' : ''} onClick={() => handleFilterChange('pending')}>
        Pending
      </button>
    </div>
  );
};

export default LeftPanel;