import React from 'react'
import Todos from '../components/Todos'
import Addtodo from '../components/Addtodo'

const Home = () => {
  return (
    <div className='Home'>
        <Addtodo />
        <div className='todo-lists'>
            <Todos/>
        </div>
    </div>
  )
}

export default Home