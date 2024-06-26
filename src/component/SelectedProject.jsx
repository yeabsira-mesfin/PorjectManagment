import React from 'react'
import Tasks from './Tasks'
const SelectedProject = ({project,onDelete, onAddTask, onDeleteTask,tasks}) => {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-us',{
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
  return (
    <div className='w-[35rem] mt-16 '>
        <header className='pb-4 mb-4 border-b-2 border-gray-100'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold text-white'>{project.title}</h1>
                <button className='text-white hover:text-red-700' onClick={onDelete}>Delete</button>
            </div>
            <p className='mb-4 text-white'>{formattedDate}</p>
            <p className='whitespace-pre-wrap text-white'>{project.description}</p>
        </header>
        <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks}/>
    </div>
  )
}

export default SelectedProject