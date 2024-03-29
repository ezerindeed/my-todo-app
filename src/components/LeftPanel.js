import React, { useState } from 'react';


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
      <div className='add-task'>
        <input
          type="text"
          placeholder="Add new task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={handleAddTask}>Add task</button>
      </div>
      <div className='filter'>
        <h4>Filter Tasks</h4>
        <div className={selectedFilter === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>
          <p>All <span>tasks</span></p>
        </div>
        <div className={selectedFilter === 'completed' ? 'active' : ''} onClick={() => handleFilterChange('completed')}>
          <p>Completed <span>tasks</span></p>
        </div>
        <div className={selectedFilter === 'pending' ? 'active' : ''} onClick={() => handleFilterChange('pending')}>
          <p>Pending <span>tasks</span></p>
        </div>
        <p className='credit'>
          by Ebenezer
        </p>
      </div>
    </div>
  );
};

export default LeftPanel;