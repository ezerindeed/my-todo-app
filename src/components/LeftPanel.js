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
      <div className='app-name'>TODO</div>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleAddTask}>Add task</button>
      <div className='filter'>
        <h4>Filter Tasks</h4>
        <div className={selectedFilter === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>
          All tasks
        </div>
        <div className={selectedFilter === 'completed' ? 'active' : ''} onClick={() => handleFilterChange('completed')}>
          Completed tasks
        </div>
        <div className={selectedFilter === 'pending' ? 'active' : ''} onClick={() => handleFilterChange('pending')}>
          Pending tasks
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;