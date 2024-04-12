import React, { useState } from 'react'
import './Todo1.css'

function Todo1() {

  const [inputValue,setInputValue]=useState('')
  const[listvalue,setListValue]=useState([])

  const inputTarget=(event)=>{
    setInputValue(event.target.value)
  }

  const addInputValue=()=>{
    if(inputValue !=='')
    {
      setListValue([...listvalue,{id:Date(),text:inputValue}])
    }
    setInputValue('')
  }

  const deleteInputValue=(id)=>{
   const updateValue= listvalue.filter(list=>list.id!==id)
   setListValue(updateValue)
  }

  const clearValue=()=>{
    setListValue(listvalue=[])
  }
  return (
    <div>
       <div className='todo1'>
        <h1>to do list</h1>

        <div>
            <input type="text " placeholder='add to do here' value={inputValue} onChange={inputTarget} />
            <button onClick={addInputValue}>Add</button>
            <button onClick={clearValue}>clear</button>
        </div>


        <ul>
          {listvalue.map((item)=>(
            <li>{item.text} <span>{item.id}</span><span><button onClick={()=>deleteInputValue(item.id)}>delete</button></span></li>
          ))}
        </ul>
     </div>
  
    </div>
  )
}

export default Todo1
