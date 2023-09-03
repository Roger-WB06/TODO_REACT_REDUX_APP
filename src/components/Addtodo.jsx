import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/slice/todoSlice'

const Addtodo = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const handleAdd = ()=> {
        if(input !== '') {
            dispatch(add(input))
            setInput('')
        }
        else{
            alert('add the todo field!')
        }
    }
  return (
    <div className='add-todo'>
        <div className='todo-input'>
            <textarea value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
        </div>
    </div>
  )
}

export default Addtodo