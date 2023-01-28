
import React from 'react'
// import { useRouter } from 'next/router';
// import Link from "next/link"
// import React,{ useState } from "react";
// import doctor from '../record';
const PatientCard = () => {
    //     const [fname, setfname] = useState('');
    // const [lname, setlname] = useState('');
    // const [dob, setdob] = useState('');
    // const [phone, setphone] = useState('');
    // const [description, setdescription] = useState('');
    // const [allergy, setallergy] = useState('');
    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     try {
    //         const accounts = await window.ethereum.enable();
    //         await doctor.methods.setPatient(fname,lname,dob,phone,description,allergy).send({from:accounts[0]});
    //         alert("Patient created successfully");
    //     } catch (error) {
    //         alert("Could not add Patient");
            
    //     }
    // }

// const  handlepatient1 = async() =>{
// try {
//     // const addr = props.query.address;
//     const accounts = await window.ethereum.enable();
//     const addr = accounts[0];
//     const patientInfo = await doctor.methods.getPatient(addr).call({from:accounts[0]});
//     console.log("Patient fname:" +toString(patientInfo[0]));
//     console.log("Patient lname:" +patientInfo[1]);
//     console.log("Patient dob:" +patientInfo[2]);
//     console.log("Patient phone:" +patientInfo[3]);
//     console.log("Patient description:" +patientInfo[4]);
//     console.log("Patient allergy:" +patientInfo[5]);
//     console.log(typeof(accounts[0]));
//     console.log(accounts[0]);
//     //  const patientInfo[0]=
    
// } catch (error) {
//     console.log(error);
//     alert("error in getting patient information");
// }
// }

  return (
    <div className="card w-72 mx-auto bg-white border rounded shadow hover:shadow-xl">
        
        {/* <button  class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"  >Get permission</button> */}
        {/* <button  class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"  >Get</button> */}
            {/* <img className="w-28 mx-auto rounded-full mt-20 border-8 border-white" src="https://avatars.githubusercontent.com/u/67946056?v=4" alt="Profile Pic" /> */}
            <div class="text-center mt-2 text-1xl font-medium "><b><u>Patient 1</u></b>    details</div>
            
            <div class="text-center mt-2 text-1xl font-medium"><b>Full Name:</b>taj baba</div>
            {/* <div class="text-center mt-2 text-3xl font-medium"><b>secondname:</b> kumar</div> */}

            {/* <div class="text-center mt-2 font-light text-sm"><h2>secondname:</h2>kumar</div> */}
            <div class="text-center font-normal text-lg"><h3>DOB:</h3> 01/01/2000</div>
            <div class="text-center font-normal text-lg"><h3>phone :</h3> 123456</div>

            <div class="px-6 text-center mt-2 font-light text-sm">
                <p>
                   <b>Description:</b> fever,cold
                </p>
                <p>
                  <b>allergies:</b> 
                    paracetamol
                </p>
            </div>
            <hr class="mt-8" />
            <div class="flex p-4">
                <div class="w-1/2 text-center">
                    <span class="font-bold">Full Info</span> 
                </div>
            </div>
        </div>
  )
}

export default PatientCard