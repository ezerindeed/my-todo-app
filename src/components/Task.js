import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdDoneAll } from "react-icons/md";

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
      <div className='task-name'>{name}</div>
      <div className='under'>
        <div className='task-status'>Status: {status}</div>
        <div className='task-buttons'>
          <MdDoneAll onClick={handleCompleteClick}>{status === 'completed' ? 'Undo' : 'Complete'}</MdDoneAll>
          <RiDeleteBin6Line onClick={handleDeleteClick} />
        </div>
      </div>
    </div>
  );
};

export default Task;