import React, { useState } from 'react';




function Edit({ selectedTask, updateTask, closeModal }) {
  const [editedTitle, setEditedTitle] = useState(selectedTask.title || '');
  const [editedDesc, setEditedDesc] = useState(selectedTask.desc || '');
  const [editedDate, setEditedDate] = useState(selectedTask.date || '');
  const [editedId, setEditedId]= useState(selectedTask.id);
  const [editedStatus,setEditedStatus] = useState(selectedTask.status);

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setEditedDesc(e.target.value);
  };

  const handleDateChange = (e) => {
    setEditedDate(e.target.value);
  };

  const retainid = () => {
    setEditedId(selectedTask.id);
  }

  const saveChanges = () => {
    // Create an updated task object with edited values
    const updatedTask = {
      id: editedId, // Retain the original id
      title: editedTitle,
      desc: editedDesc,
      date: editedDate,
      status: editedStatus, // Retain the original status
    };
    // Update the task in the task list with the updated task object
    updateTask(updatedTask);
    // Close the modal
    closeModal();
  };
  

  return (
    <div>
      <div className='bg-sky-600 flex flex-col justify-center content-center align-cente w-[600px] h-[500px] rounded-[15px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-65%]'>
        <div className='bg-transparent text-center'>
          <h1 className='bg-transparent text-[40px] font-bold mt-[25px]'>
            Edit Task
          </h1>
        </div>
        <div className='bg-transparent self-center mt-[25px]'>
          <p className='bg-transparent text-[20px]'>Title: </p>
          <input
            type='text'
            name='title'
            value={editedTitle}
            onChange={handleTitleChange}
            placeholder='New Title'
            required
            className='bg-white w-[300px] rounded-[5px] text-black'
          />

          <p className='bg-transparent text-[20px]'>Description:</p>

          <input
            type='text'
            name='desc'
            value={editedDesc}
            onChange={handleDescChange}
            placeholder='New Description'
            required
            className='bg-white w-[300px] rounded-[5px] text-black'
          />

          <p className='bg-transparent text-[20px]'>Select Date and Time: </p>

          <input
            type='datetime-local'
            name='date'
            value={editedDate}
            onChange={handleDateChange}
            id='date'
            required
            className='bg-white w-[300px] rounded-[5px] text-black'
          />
        </div>
        <div className='bg-transparent self-center mt-[25px]'>
          <button
            onClick={saveChanges}
            className='w-[100px] h-[50px] bg-green-400 rounded-full mr-[20px]'
          >
            Save Changes
          </button>
          <button
            onClick={() => {
              closeModal();
            }}
            className='w-[100px] h-[50px] bg-red-400 rounded-full'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
