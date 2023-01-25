import Link from "next/link"


const Modal = () => {
    return (
        <div className="my-20">
            <div class="block text-center max-w-sm p-6 bg-white border-4 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What are you?</h5>
                <div className="cursor-pointer flex">
                    <Link href="/doctorsign" as="/Doctor">
                        <div className="transform transition-transform duration-400 ease-in-out hover:scale-90 text-center mr-10">
                            <img className="w-32 mx-auto rounded-full mt-10 border-8 border-white" src="/doctor-color.png" alt="Profile Pic" />
                            <div className="text-lg">Doctor</div>
                        </div>
                    </Link>
                    <Link href="/doctorsign" as="/Doctor">
                        <div className="transform transition-transform duration-400 ease-in-out hover:scale-90 text-center">
                            <img className="w-32 mx-auto rounded-full mt-10 border-8 border-white" src="/patient-color.png" alt="Profile Pic" />
                            <div className="text-lg">Patient</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Modal