import React, {useState} from 'react'


function Modal({ closeModal, newid, addTask}) {
    const [newTask,setnewTask] = useState({
        id: newid,
        title:'',
        desc:'',
        date:'',
        status: false,
        forEdit: false
    });


    const taskInputHandler = e => {
        setnewTask((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };


    
  return (
    <div>
        <div className='bg-sky-600 flex flex-col justify-center content-center align-cente w-[600px] h-[500px] rounded-[15px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-65%]'>
            <div className='bg-transparent text-center'>
                <h1 className='bg-transparent text-[40px] font-bold mt-[25px]'>New Task</h1>
            </div>
            <div className='bg-transparent self-center mt-[25px]'>
                <p className='bg-transparent text-[20px]'>Title: </p>

                <input 
                    type="text" 
                    name="title" 
                    value={newTask.title} 
                    onChange={taskInputHandler} 
                    placeholder="Task title" 
                    autoComplete="off"
                    required
                    className='bg-white w-[300px] rounded-[5px] text-black'  
                />

                <p  className='bg-transparent text-[20px]'>Description:</p>
                
                <input 
                    type="text" 
                    name="desc" 
                    value={newTask.desc} 
                    onChange={taskInputHandler} 
                    placeholder="Description" 
                    autoComplete="off"
                    required
                    className='bg-white w-[300px] rounded-[5px] text-black'
                />
                
                <p className='bg-transparent text-[20px]'>Select Date and Time: </p>
                
                <input 
                    type="datetime-local" 
                    name="date" 
                    value={newTask.date} 
                    onChange={taskInputHandler} 
                    id="date" 
                    autoComplete="off"
                    required
                    className='bg-white w-[300px] rounded-[5px] text-black'
                />

            </div>
            <div className='bg-transparent self-center mt-[25px]'>
                <button onClick={() => addTask(newTask)} className='w-[100px] h-[50px] bg-green-400 rounded-full mr-[20px]'>+ Add task</button>
                <button onClick={()=>{closeModal(false);}} className='w-[100px] h-[50px] bg-red-400 rounded-full'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Modal
