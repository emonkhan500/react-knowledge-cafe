

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Bookmrk from './components/Bookmrk'
import Header from './components/Header'

function App() {
  const[bookmark,setBookmark]=useState([])
  // console.log(bookmark)
  const handleBookmark=(blog)=>{
    const newBookmark=[...bookmark,blog]
    setBookmark(newBookmark)
  }
   
  const [readTimes,setReadTime]=useState(0)
  console.log(readTimes)
  
  const handleRead=(readTime)=>{
    const totalTime=readTimes+readTime;
    setReadTime(totalTime)
    
  }
  

  return (
    <>
      
      
      <Header></Header>
     <div className="flex flex-col lg:flex-row gap-2 container mx-auto mt-14">
     <Blogs className=" w-2/3" handleBookmark={handleBookmark} handleRead={handleRead}></Blogs>
     <Bookmrk className="flex-1" bookmark={bookmark} readTimes={readTimes}></Bookmrk>
     </div>
    </>
  )  
}

export default App
