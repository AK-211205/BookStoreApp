import React from 'react'
import Navbar from "../components/Navbar"
import Course from "../components/Course"
import Footer from "../components/Footer"

function Courses() {
    console.log("Courses component rendered");
  return (
    <>
        <Navbar/>
        <div className="min-h-screen">
            <Course/>
        </div>
        {/* <Course/> */}
        
        <Footer/>
    </>
  )
}

export default Courses