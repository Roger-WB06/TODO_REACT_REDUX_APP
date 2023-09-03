import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { remove } from '../redux/slice/todoSlice'

const Todos = () => {

    const todos = useSelector(state => state.todo)

    const dispatch = useDispatch()
  return (
    <div className='todos'>
        <ul>
            {
                todos.map((todo,index)=> 
                    <li key={index}>
                        <div>
                            {
                                index + 1
                            } .
                        </div>
                        <div>
                            {todo}
                        </div>
                        <button onClick={()=> dispatch(remove(index))}>remove</button>
                    </li>
                )
            }
        </ul>
    </div>
  )
}

export default Todos