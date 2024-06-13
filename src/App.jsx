import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Edit from './Edit';

const localStoragekey = "tasks";

function App() {
  const [updateTaskModal, setUpdateTaskModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [taskList, setTaskList] = useState(() => {
    return JSON.parse(localStorage.getItem(localStoragekey)) || [];
  });
  const [editIndex, setEditIndex] = useState(null); // Track the index of task being edited
  const [filter, setFilter] = useState('all'); // 'all', 'pending', 'finished'

  // Load tasks from local storage on mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(localStoragekey)) || [];
    setTaskList(storedTasks);
  }, []);

  // Save tasks to local storage whenever taskList changes
  useEffect(() => {
    localStorage.setItem(localStoragekey, JSON.stringify(taskList));
  }, [taskList]);

  const handleStatus = (index) => {
    const updatedTasks = taskList.map((task, i) =>
      i === index ? { ...task, status: !task.status } : task
    );
    setTaskList(updatedTasks);
  };

  const addTask = (newTask) => {
    setTaskList((prevTasks) => [...prevTasks, newTask]);
    setOpenModal(false);
  };

  const deleteTask = (index) => {
    const updatedTasks = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTasks);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = taskList.map((task, i) =>
      i === editIndex ? updatedTask : task
    );
    setTaskList(updatedTasks);
    setUpdateTaskModal(false);
    setEditIndex(null); // Reset edit index after update
  };

  // Function to filter tasks based on the current filter
  const filteredTasks = () => {
    switch (filter) {
      case 'pending':
        return taskList.filter(task => !task.status);
      case 'finished':
        return taskList.filter(task => task.status);
      case 'all':
      default:
        return taskList;
    }
  };

  return (
    <>
      <header className='mt-[50px]'>
        <h1 className='text-[40px] text-center font-bold'>Todo App</h1>
        <div className="flex justify-center gap-[24px] mb-[25px]">
          <button className='w-[100px] h-[50px] rounded-full text-black bg-white hover:bg-gray-400' onClick={() => setFilter('all')}>All tasks</button>
          <button className='w-[100px] h-[50px] rounded-full text-black bg-white hover:bg-gray-400' onClick={() => setFilter('pending')}>Pending</button>
          <button className='w-[100px] h-[50px] rounded-full text-black bg-white hover:bg-gray-400' onClick={() => setFilter('finished')}>Finished</button>
        </div>
      </header>

      <main>
        <div className='flex justify-center'>
          <div className='w-[1080px] h-[720px] bg-white flex justify-center flex-col rounded-[15px]'>
            <div className='bg-transparent flex flex-row justify-between mb-[10px]'>
              <h1 className='text-[24px] text-black bg-transparent ml-[50px] font-bold'>Task</h1>
              <button className='w-[150px] h-[50px] rounded-full text-white bg-sky-600 hover:bg-sky-800 mr-[50px]' onClick={() => { setOpenModal(true); }}>+ Add Task</button>
            </div>
            
            <div className='w-[1000px] h-[600px] bg-gray-300 rounded-[15px] self-center grid grid-rows-2 grid-cols-3' id='taskContainer'>
              {filteredTasks().map((task, index) => (
                <div key={index} className={`taskcard ${task.status ? 'jobsdone' : ''}`}>
                  <p className='mt-[25px] text-[20px]'>{task.title}</p>
                  <p>{task.desc}</p>
                  <p className='mt-auto text-[15px]'>{task.date}</p>
                  <div className='flex flex-row self-center bg-transparent'>
                    <input type="checkbox" name="isDone" id="isDone" checked={task.status} onChange={() => handleStatus(index)} className='bg-transparent' />
                    <p className='bg-transparent ml-[10px]'>Mark as Done</p>
                  </div>
                  <div className='mt-auto mb-[15px] bg-transparent'>
                    <button onClick={() => { setUpdateTaskModal(true); setEditIndex(index); }} className='mr-[10px] w-[75px] h-[30px] bg-sky-600 rounded-full overflow-hidden'>edit</button>
                    <button onClick={() => deleteTask(index)} className='w-[75px] h-[30px] bg-red-600 rounded-full overflow-hidden'>delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      {openModal && <Modal closeModal={() => setOpenModal(false)} newid={taskList.length + 1} addTask={addTask} />}
      {updateTaskModal && <Edit closeModal={() => setUpdateTaskModal(false)} selectedTask={taskList[editIndex]} updateTask={updateTask} />}
    </>
  );
}

export default App;
