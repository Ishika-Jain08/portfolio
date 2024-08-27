import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Home from './Components/HomePage/Home'
import About from './Components/AboutPage/About'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/Experience'
import { Route, Routes } from 'react-router-dom'
import Project from './Components/Projects/Project'
import Achievement from './Components/Achievement/Achievement'
import Contact from './Components/Contact/Contact'
import ProInfo1 from './Components/Projects/ProInfo/ProInfo1'
import "./Components/LocomotiveCSS/style.css";
function App() {
  
  
  return (
    <>
   <Navbar/>
   <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/about' element={<About/>}/>
    <Route  path='/experience' element={<Experience/>}/>
    <Route  path='/skills' element={<Skills/>}/>
    <Route  path='/project' element={<Project/>}/>
    <Route  path='/achievement' element={<Achievement/>}/>
    <Route  path='/contact' element={<Contact/>}/>
    <Route  path='/info' element={<ProInfo1/>}/>
   </Routes>
   
    </>
  )
}

export default App
