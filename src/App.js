import React from 'react'
import Nav from './components/Nav'
import SideBar from './components/SideBar'
import Feed from './components/Feed'

function App() {
  return (
    <div>
      <Nav />
      <div className='flex justify-between w-full mt-14'>
        <SideBar />
        <Feed />
      </div>
    </div>
  )
}

export default App
