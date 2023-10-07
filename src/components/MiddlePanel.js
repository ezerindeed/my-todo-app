import React from 'react';
import Task from './Task'

import '../styles/MiddlePanel.css'

const MiddlePanel = ({ tasks }) => {
    return (
      <div className="middle-panel">
        <h2>Task List</h2>
        {tasks && tasks.length === 0 ? (
          <p>No tasks to display.</p>
        ) : (
          <div className="task-list">
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </div>
        )}
      </div>
    );   
  };

export default MiddlePanel;