import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen bg-blue-900 text-white flex justify-center items-center'>
        <h1 className='text-3xl font-bold '>Welcome to SanaTech global</h1>
      </div>
    </>
  )
}

export default App
