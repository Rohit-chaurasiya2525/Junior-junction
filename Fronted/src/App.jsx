import React from 'react'
import Navbar from './compotement/Navbar'
import { Route ,Router,Routes } from 'react-router-dom'
import About from './compotement/About'
import Contact from './compotement/contact'
// import Upload from './Junior/upload'
import Home from './Junior/Home'
import Sall from './Junior/Sall'
import Job from './compotement/Job'
import Asmita from './compotement/Asmita'

const App = () => {
  return (
    <div>
   <sall />
<Routes>
<Route path='/' element={<Navbar/>} />
{/* <Route path='/Junior-home' element ={< Home/>} /> */}
<Route path='/junior-home' element ={<Home/>} />
  <Route path='/about' element ={<About/>} />
  <Route path='/contact' element ={<Contact />} />
  {/* <Route path='/upload' element ={<Upload/>} /> */}
  <Route path='/Sall' element ={<Sall/>} />
  <Route path='/job' element ={<Job/>} />
  <Route path='/Asmita' element ={<Asmita/>} />

</Routes>
    </div>
  )
}

export default App
