// import Link from "next/link"
// import React,{ useState } from "react";
// import doctor from '../record';
// const PatientForm = () => {
//         const [fname, setfname] = useState('');
//         const [lname, setlname] = useState('');
//         const [dob, setdob] = useState('');
//         const [phone, setphone] = useState('');
//         const [description, setdescription] = useState('');
//         const [allergy, setallergy] = useState('');
//         const handleSubmit = async(e) => {
//             e.preventDefault();
//             try {
//             //     //
//             //     // const addr = props.query.address;
//             const accounts = await window.ethereum.enable();
//             // const addr = accounts[0];
//             //     const accounts = await window.ethereum.request({method:'eth_requests'});

//                 await doctor.methods.setPatient(fname,lname,dob,phone,description,allergy).send({from:accounts[0]});
//                 alert("Patient created successfully");
//             } catch (error) {
//                 alert("Could not add patient");
                
//             }
//             // try {
//             //     const accounts = await window.ethereum.enable();
//             //     await doctor.methods.setPatient(fname,lname,dob,phone,description,allergy).send({from:accounts[0]});
//             //     alert("Patient created successfully");
//             // } catch (error) {
//             //     alert("Could not add Patient");
                
//             // }
//         }

//    const handlepatient = async() =>{
//     try {
//         // const addr = props.query.address;

//         const patientInfo = await doctor.methods.getPatient().call();
//         console.log("Patient fname:" +patientInfo[0]);
//         console.log("Patient lname:" +patientInfo[1]);
//         console.log("Patient dob:" +patientInfo[2]);
//         console.log("Patient phone:" +patientInfo[3]);
//         console.log("Patient description:" +patientInfo[4]);
//         console.log("Patient allergy:" +patientInfo[5]);
        
//     } catch (error) {
//         console.log(error);
//         alert("error in getting patient information");
//     }
//    }


//     return (
//         <>
//             <div className="text-center text-xl mt-10 font-medium text-[#07074D]">Patient Sign Up</div>
//             <Link href="/patientdash" as="/PatientDash">
//             <button className="text-center text-xl mt-10 font-medium text-[#07074D">Goto</button>
//             </Link>
//             <div class="flex items-center justify-center p-12">
//                 <div class="mx-auto w-full max-w-[550px]">
//                     <form onSubmit={handleSubmit} >
//                         <div class="-mx-3 flex flex-wrap">
//                             <div class="w-full px-3 sm:w-1/2">
//                                 <div class="mb-5">
//                                     <label 
//                                         for="fName"
//                                         class="mb-3 block text-base font-medium text-[#07074D]"
//                                     >
//                                         First Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="fName"
//                                         id="fName"
//                                         value={fname}
//                                         onChange={e => setfname(e.target.value)}
//                                         placeholder="First Name"
//                                         class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                                     />
//                                 </div>
//                             </div>
//                             <div class="w-full px-3 sm:w-1/2">
//                                 <div class="mb-5">
//                                     <label
//                                         for="lName"
//                                         class="mb-3 block text-base font-medium text-[#07074D]"
//                                     >
//                                         Last Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="lName"
//                                         id="lName"
//                                         value={lname}
//                                         onChange={e => setlname(e.target.value)}
//                                         placeholder="Last Name"
//                                         class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                                     />
//                                 </div>
//                             </div>
//                         </div>


//                         <div class="-mx-3 flex flex-wrap">
//                             <div class="-mx-3 flex flex-wrap">
//                                 <div class="w-full px-3 sm:w-1/2">
//                                     <div class="mb-5">
//                                         <label
//                                             for="date"
//                                             class="mb-3 block text-base font-medium text-[#07074D]"
//                                         >
//                                             Date of birth
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="date"
//                                             id="date"
//                                             value={dob}
//                                         onChange={e => setdob(e.target.value)}
//                                         placeholder="01/01/2000"
//                                             class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div class="w-full px-3 sm:w-1/2">
//                                     <div class="mb-5">
//                                         <label
//                                             for="lName"
//                                             class="mb-3 block text-base font-medium text-[#07074D]"
//                                         >
//                                             Phone Number
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="phnum"
//                                             id="phnum"
//                                             value={phone}
//                                         onChange={e => setphone(e.target.value)}
//                                             placeholder="Phone"
//                                             class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>


//                         <div class="-mx-3 flex flex-wrap">
//                             <div class="w-full px-3 sm:w-1/2">
//                                 <div class="mb-5">
//                                     <label
//                                         for="fName"
//                                         class="mb-3 block text-base font-medium text-[#07074D]"
//                                     >
//                                         Description
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="spc"
//                                         id="spc"
//                                         value={description}
//                                         onChange={e => setdescription(e.target.value)}
//                                         placeholder="about problem"
//                                         class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                                     />
//                                 </div>
//                             </div>
//                             <div class="w-full px-3 sm:w-1/2">
//                                 <div class="mb-5">
//                                     <label
//                                         for="qual"
//                                         class="mb-3 block text-base font-medium text-[#07074D]"
//                                     >
//                                         Allergy
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="qual"
//                                         id="qual"
//                                         value={allergy}
//                                         onChange={e => setallergy(e.target.value)}
//                                         placeholder="ex..paracetomal"
//                                         class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                                     />
//                                 </div>
//                             </div>
//                         </div>


//                         <div class="mb-5">
//                             <label class="mb-3 block text-base font-medium text-[#07074D]">
//                                 Gender
//                             </label>
//                             <div class="flex items-center space-x-6">
//                                 <div class="flex items-center">
//                                     <input
//                                         type="radio"
//                                         name="radio1"
//                                         id="radioButton1"
//                                         class="h-5 w-5"
//                                     />
//                                     <label
//                                         for="radioButton1"
//                                         class="pl-3 text-base font-medium text-[#07074D]"
//                                     >
//                                         Male
//                                     </label>
//                                 </div>
//                                 <div class="flex items-center">
//                                     <input
//                                         type="radio"
//                                         name="radio1"
//                                         id="radioButton2"
//                                         class="h-5 w-5"
//                                     />
//                                     <label
//                                         for="radioButton2"
//                                         class="pl-3 text-base font-medium text-[#07074D]"
//                                     >
//                                         Female
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="mb-8">
//                             <input type="file" name="file" id="file" class="sr-only" />
//                             <label
//                                 for="file"
//                                 class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
//                             >
//                                 <div>
//                                     <span class="mb-2 block text-xl font-semibold text-[#07074D]">
//                                         Drop Certificates here
//                                     </span>
//                                     <span class="mb-2 block text-base font-medium text-[#6B7280]">
//                                         Or
//                                     </span>
//                                     <span
//                                         class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
//                                     >
//                                         Browse
//                                     </span>
//                                 </div>
//                             </label>
//                         </div>

//                         <div>
//                             {/* <Link href="/doctordash" as="/DoctorDash"> */}
//                                 <button type="submit"
//                                     class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
//                                 >
//                                    Create
//                                 </button>
//                             {/* </Link> */}

//                         </div>
                    
//                     </form>
//                     <button onClick={handlepatient}
//                                     class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
//                                 >
//                                     Get Patient
//                                 </button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default PatientForm
import Link from "next/link"
import React,{ useState } from "react";
import doctor from '../record';
const PatientForm = () => {
        const [fname, setfname] = useState('');
        const [lname, setlname] = useState('');
        const [dob, setdob] = useState('');
        const [phone, setphone] = useState('');
        const [description, setdescription] = useState('');
        const [allergy, setallergy] = useState('');
        const handleSubmit = async(e) => {
            e.preventDefault();
            // try {
            //     //
            //     // const addr = props.query.address;
            //     // const accounts = await window.ethereum.enable();
            //     const accounts = await window.ethereum.request({method:'eth_requests'});

            //     await doctor.methods.setPatient(fname,lname,dob,phone,description,allergy).send({from:accounts[0]});
            //     alert("Patient created successfully");
            // } catch (error) {
            //     alert("Could not add patient");
                
            // }
            try {
                const accounts = await window.ethereum.enable();
                await doctor.methods.setPatient(fname,lname,dob,phone,description,allergy).send({from:accounts[0]});
                alert("Patient created successfully");
            } catch (error) {
                alert("Could not add Patient");
                
            }
        }

   const handlepatient = async() =>{
    try {
        // const addr = props.query.address;
        const accounts = await window.ethereum.enable();
        const addr = accounts[0];
        const patientInfo = await doctor.methods.getPatient(addr).call({from:accounts[0]});
        console.log("Patient fname:" +patientInfo[0]);
        console.log("Patient lname:" +patientInfo[1]);
        console.log("Patient dob:" +patientInfo[2]);
        console.log("Patient phone:" +patientInfo[3]);
        console.log("Patient description:" +patientInfo[4]);
        console.log("Patient allergy:" +patientInfo[5]);
        
    } catch (error) {
        console.log(error);
        alert("error in getting patient information");
    }
   }


    return (
        <>
            <div className="text-center text-xl mt-10 font-medium text-[#07074D]">Patient Sign Up</div>
            <Link href="/doctordash" as="/DoctorDash">
            <button className="text-center text-xl mt-10 font-medium text-[#07074D">Goto</button>
            </Link>
            <div class="flex items-center justify-center p-12">
                <div class="mx-auto w-full max-w-[550px]">
                    <form onSubmit={handleSubmit} >
                        <div class="-mx-3 flex flex-wrap">
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label 
                                        for="fName"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fName"
                                        id="fName"
                                        value={fname}
                                        onChange={e => setfname(e.target.value)}
                                        placeholder="First Name"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="lName"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lName"
                                        id="lName"
                                        value={lname}
                                        onChange={e => setlname(e.target.value)}
                                        placeholder="Last Name"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>


                        <div class="-mx-3 flex flex-wrap">
                            <div class="-mx-3 flex flex-wrap">
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <label
                                            for="date"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Date of birth
                                        </label>
                                        <input
                                            type="text"
                                            name="date"
                                            id="date"
                                            value={dob}
                                        onChange={e => setdob(e.target.value)}
                                        placeholder="01/01/2000"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <label
                                            for="lName"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            name="phnum"
                                            id="phnum"
                                            value={phone}
                                        onChange={e => setphone(e.target.value)}
                                            placeholder="Phone"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="-mx-3 flex flex-wrap">
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="fName"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        name="spc"
                                        id="spc"
                                        value={description}
                                        onChange={e => setdescription(e.target.value)}
                                        placeholder="about problem"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="qual"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Allergy
                                    </label>
                                    <input
                                        type="text"
                                        name="qual"
                                        id="qual"
                                        value={allergy}
                                        onChange={e => setallergy(e.target.value)}
                                        placeholder="ex..paracetomal"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>


                        <div class="mb-5">
                            <label class="mb-3 block text-base font-medium text-[#07074D]">
                                Gender
                            </label>
                            <div class="flex items-center space-x-6">
                                <div class="flex items-center">
                                    <input
                                        type="radio"
                                        name="radio1"
                                        id="radioButton1"
                                        class="h-5 w-5"
                                    />
                                    <label
                                        for="radioButton1"
                                        class="pl-3 text-base font-medium text-[#07074D]"
                                    >
                                        Male
                                    </label>
                                </div>
                                <div class="flex items-center">
                                    <input
                                        type="radio"
                                        name="radio1"
                                        id="radioButton2"
                                        class="h-5 w-5"
                                    />
                                    <label
                                        for="radioButton2"
                                        class="pl-3 text-base font-medium text-[#07074D]"
                                    >
                                        Female
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="mb-8">
                            <input type="file" name="file" id="file" class="sr-only" />
                            <label
                                for="file"
                                class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                            >
                                <div>
                                    <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                                        Drop Certificates here
                                    </span>
                                    <span class="mb-2 block text-base font-medium text-[#6B7280]">
                                        Or
                                    </span>
                                    <span
                                        class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                                    >
                                        Browse
                                    </span>
                                </div>
                            </label>
                        </div>

                        <div>
                            {/* <Link href="/doctordash" as="/DoctorDash"> */}
                                <button type="submit"
                                    class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                >
                                   Create
                                </button>
                            {/* </Link> */}

                        </div>
                    
                    </form>
                    <button onClick={handlepatient}
                                    class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                >
                                    Get Patient
                                </button>
                </div>
            </div>
        </>
    )
}

export default PatientForm