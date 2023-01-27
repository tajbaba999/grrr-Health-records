import Link from "next/link"
import React,{ useState } from "react";
import doctor from '../record';
const DoctorForm = () => {
        const [fname, setfname] = useState('');
        const [lname, setlname] = useState('');
        const [dob, setdob] = useState('');
        const [phone, setphone] = useState('');
        const [qualification, setqualification] = useState('');
        const [speciality, setspeciality] = useState('');
        const handleSubmit = async(e) => {
            e.preventDefault();
            try {
                const accounts = await window.ethereum.enable();
                await doctor.methods.setDoctor(fname,lname,dob,phone,qualification,speciality).send({from:accounts[0]});
                alert("Doctor created successfully");
            } catch (error) {
                alert("Could not add doctor");
                
            }
        }

   const handledoctor = async() =>{
    try {
        const doctorInfo = await doctor.methods.getDoctor().call();
        console.log("Doctor fname:" +doctorInfo[0]);
        console.log("Doctor lname:" +doctorInfo[1]);
        console.log("Doctor dob:" +doctorInfo[2]);
        console.log("Doctor phone:" +doctorInfo[3]);
        console.log("Doctor qualification:" +doctorInfo[4]);
        console.log("Doctor speciality:" +doctorInfo[5]);
        
    } catch (error) {
        console.log(error);
        alert("error in getting doctor information");
    }
   }


    return (
        <>
            
            <div className="text-center text-xl mt-10 font-medium text-[#07074D]">Doctor Sign Up</div>
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
                                        placeholder="01/01/2002"
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
                                        Specialty
                                    </label>
                                    <input
                                        type="text"
                                        name="spc"
                                        id="spc"
                                        value={speciality}
                                        onChange={e => setspeciality(e.target.value)}
                                        placeholder="Specialty"
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
                                        Qualification
                                    </label>
                                    <input
                                        type="text"
                                        name="qual"
                                        id="qual"
                                        value={qualification}
                                        onChange={e => setqualification(e.target.value)}
                                        placeholder="Last Name"
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
                    <button onClick={handledoctor}
                                    class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                >
                                    Get Doctor
                                </button>
                </div>
            </div>
        </>
    )
}

export default DoctorForm