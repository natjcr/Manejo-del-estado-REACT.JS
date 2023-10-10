import React from 'react'
import { UseState } from './UseState/UseState'
import { ClassState } from './ClassState/ClassState'
import './App.css'
import { UseReducer } from './UseReducer'

function App() {
  
  return (
    <>
      <div className='App'>
        <UseState name='UseState' />
        <ClassState name='ClassState' />
        <UseReducer name='UseReducer'/>
      </div>
    </>
  )
}

export default App
