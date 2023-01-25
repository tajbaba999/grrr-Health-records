
import React from 'react'
import PatientCard from "./PatientCard"

const Patients = () => {
    return (
        <div className="flex flex-wrap mt-20 justify-between">
        <span className='lg:w-1/3 md:w-1/2 w-full'><PatientCard /></span>
        <span className='lg:w-1/3 md:w-1/2 w-full'><PatientCard /></span>
        <span className='lg:w-1/3 md:w-1/2 w-full'><PatientCard /></span>
      </div>
    )
}

export default Patients