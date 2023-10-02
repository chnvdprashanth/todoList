"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    settitle("")
    setdesc("")
  }

  const deleteHandler = (indx) =>{
    let copyOfmainTask = [...mainTask]
    copyOfmainTask.splice(indx,1)
    setmainTask(copyOfmainTask)
  }  

  let renderTask = <h1 className='text-xl font-semibold'>No Task in List</h1>

  if(mainTask.length>0){
    renderTask = mainTask.map((task,indx)=>{
      return (
        <li key={indx} className='flex'>
        <div className='w-3/4 flex items-center justify-between gap-20'>
          <div className='text-2xl font-semibold left'><h3>{task.title}</h3></div>
          <div className='text-xl font-base right'><p>{task.desc}</p></div>
        </div>
        <div className='m-auto'>
          <button className='font-medium bg-red-500 p-2 rounded' onClick={()=>{
            deleteHandler(indx)
          }}>Delete</button>
        </div>
        </li>
      );
    })
  }

  return (
    <>
      <h1 className='bg-black text-center text-white text-2xl font-bold p-4'>NVD's TODO List</h1>
      <form onSubmit={submitHandler} className='flex justify-around items-center'>
        <input type="text" 
        placeholder='Enter title here'
        className='m-8 border-4 border-black p-3 text-2xl rounded'
        value={title}
        onChange={(e)=>
          settitle(e.target.value)
        }
        />
        <input type="text" 
        placeholder='Enter description here'
        className='m-8 border-4 border-black p-3 text-2xl rounded'
        value={desc}
        onChange={(e)=>
          setdesc(e.target.value)
        }
        />
        <button className='m-5 rounded bg-black text-2xl text-white p-4'>Add Task</button>
      </form>
      <div className="bg-slate-300 my-4 mx-10 w-auto">
        <ul className='p-6'>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page