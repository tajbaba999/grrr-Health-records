import Link from "next/link";
import React from "react";
// import ReactDOM from 'react-dom';

const Navbar = () => {

  return (
    <nav className="text-white p-6" >
      <div className="flex justify-between">
        <div className="p-2 text-md">
          <div className="" >Meds</div>
        </div>
        <div className="p-2 text-md">
          <span className="mr-8 hidden md:inline link">Home</span>
          <span className="mr-8 hidden md:inline link">Features</span>
          <span className="mr-8 hidden md:inline link">About Us</span>
          <span className="mr-8 hidden md:inline link">Socials</span>
        </div>
        <div className="p-2 text-md">
          <Link href="/choice" as="/DoctorOrPatient">
            
            
            
            <button className="btn-log">Log In </button>
            
            
            </Link>
            
        </div>
      </div>
    </nav >
  )
}

export default Navbar