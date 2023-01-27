// // import React from 'react'
// // import Link from 'next/link';
// import React, { useState } from 'react';
// // import PatientCard from './PatientCard';
// const FindPatient = () => {
// // var[count, setcount] = useState(0);
// // const [load,setLoad] = useState(false)
// // if (count==2) {
// //         setLoad(true);
// // }
//   return (
//     <>
//     <div className='text-center'>
//         <div className="text-center text-xl mt-10 font-medium items-center text-[#07074D]">Enter Patient Details</div>
//     </div>
    
//     <div class="flex items-center justify-center p-12">
//         <div class="mx-auto w-full max-w-[550px]">
//             <form action="">
//                 <div class="-mx-3 flex flex-wrap">
//                     <div class="w-full px-3 sm:w-1/2">
//                         {/* <div class="mb-5">
//                             <label
//                                 for="fName"
//                                 class="mb-3 block text-base font-medium text-[#07074D]"
//                             >
//                                 Patient User Name
//                             </label>
//                             <input
//                                 type="text"
//                                 name="fName"
//                                 id="fName"
//                                 placeholder="User Name"
//                                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                             />
//                         </div> */}
//                     </div>
//                 </div>


//                 <div class="-mx-3 flex flex-wrap">
//                     <div class="-mx-3 flex flex-wrap">
//                         <div class="w-full px-3 sm:w-1/2">
//                             {/* <div class="mb-5">
//                                 <label
//                                     for="date"
//                                     class="mb-3 block text-base font-medium text-[#07074D]"
//                                 >
//                                     Date of birth
//                                 </label>
//                                 <input
//                                     type="date"
//                                     name="date"
//                                     id="date"
//                                     class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                                 />
//                             </div> */}
//                         </div>
//                         <div class="w-full px-3 sm:w-1/2">
//                             <div class="mb-5">
//                                 <label
//                                     for="lName"
//                                     class="mb-3 block text-base font-medium text-[#07074D]"
//                                 >
//                                     Public Address
//                                 </label>
//                                 <input
//                                     type="text"
//                                     // name="phnum"
//                                     // id="phnum"
//                                     placeholder="Address"
//                                     class=" rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>


                



//                 <div>
 
//                 <button 
//     class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
// >
//     Get Record
// </button>

//                 </div>
//             </form>
//         </div>
//     </div>
// </>
//   )
// }

// export default FindPatient
// import React from 'react'
import Link from 'next/link';
import React, { useState } from 'react';
import PatientCard from './PatientCard';
const FindPatient = () => {
var[count, setcount] = useState(0);
// const [load,setLoad] = useState(false)
// if (count==2) {
//         setLoad(true);
// }
  return (
    <>
    <div className='text-center'>
        <div className="text-center text-xl mt-10 font-medium items-center text-[#07074D]">Enter Patient Details</div>
    </div>
    
    <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
            <form action="">
                {/* <div class="-mx-3 flex flex-wrap"> */}
                    {/* <div class="w-full px-3 sm:w-1/2"> */}
                        {/* <div class="mb-5">
                            <label
                                for="fName"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Patient User Name
                            </label>
                            <input
                                type="text"
                                name="fName"
                                id="fName"
                                placeholder="User Name"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div> */}
                    {/* </div> */}
                {/* </div> */}


                <div class="-mx-3 flex flex-wrap">
                    <div class="-mx-3 flex flex-wrap">
                        {/* <div class="w-full px-3 sm:w-1/2"> */}
                            {/* <div class="mb-5">
                                <label
                                    for="date"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Date of birth
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div> */}
                        {/* </div> */}
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                    for="lName"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Public Address
                                </label>
                                <input
                                    type="text"
                                    // name="phnum"
                                    // id="phnum"
                                    placeholder="Address"
                                    class=" rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                



                <div>
 
                <button 
    class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
>
    Get Record
</button>

                </div>
            </form>
        </div>
    </div>
</>
  )
}

export default FindPatient