import React, { useState } from 'react';
import Modal from './Modal';


function App(){

  const [openModal, setOpenModal] = useState(false);
  const [taskList, setTaskList] = useState([]);


  const newtaskHandler = (newTask) => {
    setTaskList(prev => [...prev, newTask]);
    setOpenModal(false);
  };


  const Check = () => {
    console.log(taskList)
  };

  return (
    <>
      
      <header className='mt-[50px]'>
        <h1 className='text-[40px] text-center font-bold'>Todo App</h1>
        <div className="flex justify-center gap-[24px] mb-[25px]">
          <button className='w-[100px] h-[50px] rounded-full text-black bg-white hover:bg-gray-400'>All tasks</button>
          <button className='w-[100px] h-[50px] rounded-full text-black bg-white hover:bg-gray-400'>Pending</button>
          <button className='w-[100px] h-[50px] rounded-full text-black bg-white hover:bg-gray-400'>Finished</button>
        </div>
      </header>

      <main>

        <div className='flex justify-center'>

          <div className='w-[1080px] h-[720px] bg-white flex justify-center flex-col rounded-[15px]'>

            <div className='bg-transparent flex flex-row justify-between mb-[10px]'>
                <h1 className='text-[24px] text-black bg-transparent ml-[50px] font-bold'>Task</h1>
                <button className='w-[150px] h-[50px] rounded-full text-white bg-sky-600 hover:bg-sky-800 mr-[50px]' onClick={()=>{setOpenModal(true);}}>+ Add Task</button>
                
            </div>
            
            <div className='w-[1000px] h-[600px] bg-gray-300 rounded-[15px] self-center grid grid-rows-2 grid-cols-3' id='taskContainer'>
                  {taskList.map((task, index) => (
                  <div key={index} className='taskcard'>
                    <p className='mt-[25px] text-[20px]'>{task.title}</p>
                    <p>{task.desc}</p>
                    <p className='mt-auto text-[15px]'>{task.date}</p>
                    <div className='flex flex-row self-center'>
                      <input type="checkbox" name="isDone" id="isDone" />
                      <p>Mark as Done</p>
                    </div>
                    <div className='mt-auto mb-[15px]'>
                      <button className='mr-[10px] w-[75px] h-[30px] bg-sky-600 rounded-full'>edit</button>
                      <button className='w-[75px] h-[30px] bg-red-600 rounded-full'>delete</button>
                    </div>
                  </div>
                ))}
            </div>

          </div>
          
        </div>
      </main>
      {openModal && <Modal closeModal={() => setOpenModal(false)} addTask = {newtaskHandler} checkarray ={Check} />}

    </>
  )
}

export default App
