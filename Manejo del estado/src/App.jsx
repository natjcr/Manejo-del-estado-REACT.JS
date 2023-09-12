import React from 'react'
import { UseState } from './UseState/UseState'
import { ClassState } from './ClassState/ClassState'
import './App.css'

function App() {
  
  return (
    <>
      <div className='App'>
        <UseState name='UseState' />
        <ClassState name='ClassState' />
      </div>
    </>
  )
}

export default App
