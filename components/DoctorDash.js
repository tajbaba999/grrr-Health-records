// import React, { useEffect, useState } from 'react'
// import MainComp from './MainComp'
// import doctor from '../record';
// // import { useRouter } from 'next/router'
// const DoctorDash = () => {
//   // const router = useRouter();
//   //   const addr = router.query.address;
//     // const accounts = await web3.eth.getAccounts();
// //     // var doctor, profilePic;
// const [fname, setfname] = useState('');
//     try {
// //         // doctor = await record.methods.searchDoctor(addr).call({from: accounts[0]});
// //         // profilePic = (doctor[3] == 'Male') ? 'https://cdn-icons-png.flaticon.com/128/387/387561.png' : 'https://cdn-icons-png.flaticon.com/128/387/387569.png';
// //         // await doctor.methods.setDoctor(fname,lname,dob,phone,qualification,speciality).send({from:accounts[0]});
//         // const doctorInfo = await doctor.methods.getDoctor().call();
//         useEffect(()=>{
//           async function fetchData(){
//       const accounts = await window.ethereum.enable();
//         const addr=accounts[0];
//         const doctorInfo = await doctor.methods.getDoctor(addr).call({from:accounts[0]});
//             setfname(doctorInfo[0]);

//           }
//           fetchData();
//         },[]);
       

// }catch(error){
//      alert("cannot set fname")
// }




//   const [num, setNum] = useState(0);

//   const clickTime = () => {
//     setNum(0);
//   }

//   const clickPatients = () => {
//     setNum(1);
//   }

//   const clickAddPat = () => {
//     setNum(2);
//   }

//   // const navTruClick = () => {
//   //   {
//   //     sidenav: true
//   //   }
//   // }

//   // const navFalseClick = () => {
//   //   {
//   //     sidenav: false
//   //   }
//   // }
  
//   return (<>
//     <div className='inline font-poppins antialiased'>
//       <div
//         id="view"
//         class="h-full w-screen flex flex-row"
//         x-data="{ sidenav: true }"
//       >
//         <button
//           // @click="sidenav = true"
//           class="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-blue-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
//         >
//           <svg
//             class="w-5 h-5 fill-current"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//               clip-rule="evenodd"
//             ></path>
//           </svg>
//         </button>
//         <div
//           id="sidebar"
//           class="bg-white h-full md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
//           x-show="sidenav"
//         // @click.away="sidenav = false"
//         >
//           <div class="space-y-6 md:space-y-10 mt-10">
//             <h1 class="font-bold text-4xl text-center md:hidden">
//               M<span class="text-blue-600">.</span>
//             </h1>
//             <h1 class="hidden md:block font-bold text-sm md:text-xl text-center">
//               MedPlus<span class="text-blue-600">.</span>
//             </h1>
//             <div id="profile" class="space-y-3">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/387/387561.png"
//                 alt="Avatar user"
//                 class="w-10 md:w-16 rounded-full mx-auto"
//               />
//               <div>
//                 <h2
//                   class="font-medium text-xs md:text-sm text-center text-blue-500"
//                 >
//                      {fname}
//                 </h2>
//                 <p class="text-xs text-gray-500 text-center">Doctor</p>
//               </div>
//             </div>
            
//             <div id="menu" class="flex flex-col space-y-2">
//               <button
//                 class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
//               >
//                 <svg
//                   class="w-6 h-6 fill-current inline-block"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
//                   ></path>
//                 </svg>
//                 <span class="">Dashboard</span>
//               </button>
//               <button
//                 href=""
//                 class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
//               >
//                 <svg
//                   class="w-6 h-6 fill-current inline-block"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
//                   <path
//                     fill-rule="evenodd"
//                     d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span class="">Reports</span>
//               </button>
//               <button
//                 href=""
//                 class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
//               >
//                 <svg
//                   class="w-6 h-6 fill-current inline-block"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
//                   ></path>
//                   <path
//                     d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
//                   ></path>
//                 </svg>
//                 <span class="">Messages</span>
//               </button>
//               <button
//                 onClick={clickAddPat}
//                 class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
//               >
//                 <svg
//                   class="w-6 h-6 fill-current inline-block"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span class="">Search Patient Record</span>
//               </button>
//               <button
//                 onClick={clickTime}
//                 class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
//               >
//                 <svg
//                   class="w-6 h-6 fill-current inline-block"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span class="">TimeLine</span>
//               </button>
//               <button
//                 href=""
//                 class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
//               >
//                 <svg
//                   class="w-6 h-6 fill-current inline-block"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
//                   ></path>
//                 </svg>
//                 <span class="">Profile</span>
//               </button>
//               <button
//                 onClick={clickPatients}
//                 class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
//               >
//                 <svg
//                   class="w-6 h-6 fill-current inline-block"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
//                   ></path>
//                 </svg>
//                 <span class="">Patients</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* Main */}
//         <MainComp num={num} />
//       </div>
//     </div>
    
//   </>
//   )
// }


// export default DoctorDash
import React, { useEffect, useState } from 'react'
import MainComp from './MainComp'
import doctor from '../record';
// import { useRouter } from 'next/router'
const DoctorDash = () => {
  // const router = useRouter();
  //   const addr = router.query.address;
    // const accounts = await web3.eth.getAccounts();
//     // var doctor, profilePic;
const [fname, setfname] = useState('');
const [lname, setlname] = useState('');
const [dob, setdob] = useState('');
const [phone, setphone] = useState('');
const [qualification, setqualification] = useState('');
// const  [speciality, setspeciality] = useState('');
try {
  //         // doctor = await record.methods.searchDoctor(addr).call({from: accounts[0]});
  //         // profilePic = (doctor[3] == 'Male') ? 'https://cdn-icons-png.flaticon.com/128/387/387561.png' : 'https://cdn-icons-png.flaticon.com/128/387/387569.png';
  //         // await doctor.methods.setDoctor(fname,lname,dob,phone,qualification,speciality).send({from:accounts[0]});
          // const doctorInfo = await doctor.methods.getDoctor().call();
          useEffect(()=>{
            async function fetchData(){
        const accounts = await window.ethereum.enable();
          const addr=accounts[0];
          const doctorInfo = await doctor.methods.getDoctor(addr).call({from:accounts[0]});
              setfname(doctorInfo[0]);
              setlname(doctorInfo[1]);
              setdob(doctorInfo[2]);
              setphone(doctorInfo[3]);
              // setspeciality(doctorInfo[4]);
              setqualification(doctorInfo[5]);

  
            }
            fetchData();
          },[]);
         
  
  }catch(error){
       alert("cannot set fname")
  }




  const [num, setNum] = useState(0);

  const clickTime = () => {
    setNum(0);
  }

  const clickPatients = () => {
    setNum(1);
  }

  const clickAddPat = () => {
    setNum(2);
  }

  const navTruClick = () => {
    {
      sidenav: true
    }
  }

  const navFalseClick = () => {
    {
      sidenav: false
    }
  }
  
  return (<>
    <div className='inline font-poppins antialiased'>
      <div
        id="view"
        class="h-full w-screen flex flex-row"
        x-data="{ sidenav: true }"
      >
        <button
          // @click="sidenav = true"
          class="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-blue-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
        >
          <svg
            class="w-5 h-5 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          id="sidebar"
          class="bg-white h-full md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
          x-show="sidenav"
        // @click.away="sidenav = false"
        >
          <div class="space-y-6 md:space-y-10 mt-10">
            <h1 class="font-bold text-4xl text-center md:hidden">
              M<span class="text-blue-600">.</span>
            </h1>
            <h1 class="hidden md:block font-bold text-sm md:text-xl text-center">
              MedPlus<span class="text-blue-600">.</span>
            </h1>
            <div id="profile" class="space-y-3">
              <img
                src="https://cdn-icons-png.flaticon.com/128/387/387561.png"
                alt="Avatar user"
                class="w-10 md:w-16 rounded-full mx-auto"
              />
              <div>
              <p class="text-xs text-gray-500 text-center">Doctor:</p>
                <h2
                  class="font-medium text-xs md:text-sm text-center text-blue-500"
                >
                      {fname} {lname}
                </h2>
              <p class="text-xs text-gray-500 text-center">DOB:</p>
                
                <h2
                  class="font-medium text-xs md:text-sm text-center text-blue-500"
                >
                      {dob}
                </h2>
                <p class="text-xs text-gray-500 text-center">Phone:</p>
                
                <h2
                  class="font-medium text-xs md:text-sm text-center text-blue-500"
                >
                      {phone}
                </h2>
                {/* <p class="text-xs text-gray-500 text-center">Speciality:</p>
                
                <h2
                  class="font-medium text-xs md:text-sm text-center text-blue-500"
                >
                      ent
                </h2> */}
                <p class="text-xs text-gray-500 text-center">Qualification:</p>
                
                <h2
                  class="font-medium text-xs md:text-sm text-center text-blue-500"
                >
                      {qualification}
                </h2>
              </div>
            </div>
            
            <div id="menu" class="flex flex-col space-y-2">
              <button
                class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  class="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
                <span class="">Dashboard</span>
              </button>
              <button
                href=""
                class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  class="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="">Reports</span>
              </button>
              <button
                href=""
                class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  class="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                  ></path>
                  <path
                    d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                  ></path>
                </svg>
                <span class="">Messages</span>
              </button>
              <button
                onClick={clickAddPat}
                class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  class="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="">Search Patient Record</span>
              </button>
              <button
                onClick={clickTime}
                class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  class="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="">TimeLine</span>
              </button>
              <button
                href=""
                class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  class="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
                  ></path>
                </svg>
                <span class="">Profile</span>
              </button>
              <button
                onClick={clickPatients}
                class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  class="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                  ></path>
                </svg>
                <span class="">Patient Details</span>
              </button>
            </div>
          </div>
        </div>
        {/* Main */}
        <MainComp num={num} />
      </div>
    </div>
    
  </>
  )
}


export default DoctorDash