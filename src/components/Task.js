import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdDoneAll } from "react-icons/md";

const Task = ({ task, onCompleteTask, onDeleteTask }) => {
  const { id, name, status } = task;

  const handleCompleteClick = () => {
    // Pass the task id to the onCompleteTask function
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
          <div className={`button ${status === 'completed' ? 'disabled' : ''}`} onClick={handleCompleteClick}>
            {status === 'completed' ? '' : <MdDoneAll />}
          </div>
          <div className='button' onClick={handleDeleteClick}>
            <RiDeleteBin6Line />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;