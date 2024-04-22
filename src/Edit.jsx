import React, {useState} from 'react'


function Edit({ closeModal, saveChanges}) {
    
    const [updateTask, setupdateTask] = useState ([]);

const prev = {
    title: 'test title',
    desc: 'test desc',
    date: 'test date'
};

    
  return (
    <div>
        <div className='bg-sky-600 flex flex-col justify-center content-center align-cente w-[600px] h-[500px] rounded-[15px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-65%]'>
            <div className='bg-transparent text-center'>
                <h1 className='bg-transparent text-[40px] font-bold mt-[25px]'>Edit Task</h1>
            </div>
            <div className='bg-transparent self-center mt-[25px]'>
                <p className='bg-transparent text-[20px]'>Title: </p>

                <input 
                    type="text" 
                    name="title" 
                    value={updateTask.title} 
                    // onChange={} 
                    placeholder={prev.title} 
                    required
                    className='bg-white w-[300px] rounded-[5px] text-black'  
                />

                <p  className='bg-transparent text-[20px]'>Description:</p>
                
                <input 
                    type="text" 
                    name="desc" 
                    value={updateTask.desc} 
                    // onChange={} 
                    placeholder={prev.desc} 
                    required
                    className='bg-white w-[300px] rounded-[5px] text-black'
                />
                
                <p className='bg-transparent text-[20px]'>Select Date and Time: </p>
                
                <input 
                    type="datetime-local" 
                    name="date" 
                    value={updateTask.date} 
                    // onChange={taskInputHandler} 
                    id="date" 
                    placeholder={prev.date}
                    required
                    className='bg-white w-[300px] rounded-[5px] text-black'
                />

            </div>
            <div className='bg-transparent self-center mt-[25px]'>
                <button onClick={() => saveChanges(newTask)} className='w-[100px] h-[50px] bg-green-400 rounded-full mr-[20px]'>Save Changes</button>
                <button onClick={()=>{closeModal(false);}} className='w-[100px] h-[50px] bg-red-400 rounded-full'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Edit
