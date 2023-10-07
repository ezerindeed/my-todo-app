import React from 'react';

import '../styles/Task.css'

const Task = ({ task, onCompleteTask, onDeleteTask }) => {
  const { id, name, status } = task;

  const handleCompleteClick = () => {
    onCompleteTask(id);
  };

  const handleDeleteClick = () => {
    onDeleteTask(id);
  };

  return (
    <div className='task-card'>
      <h3>{name}</h3>
      <p>Status: {status}</p>
      <button onClick={handleCompleteClick}>{status === 'completed' ? 'Undo' : 'Complete'}</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default Task;