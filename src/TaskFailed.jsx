import React from 'react'
import './TaskFailed.css';

export default function TaskFailed() {

  return (
    <dialog className='task-failed-dialog' open>
      <div className='task-failed-dialog__command-bar'>
        <span>Windows XP</span>
        <button>X</button>
      </div>
      <div className='task-failed-dialog__content'>
        <span>&#8505;</span>
        <span>Task failed successfully.</span>
      </div>
      <button>OK</button>
    </dialog>
  )
}

