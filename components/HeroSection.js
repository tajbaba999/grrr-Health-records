import Navbar from "./Navbar"

const HeroSection = () => {
    return (
        <div className="w-full
        h-120
        md:h-screen
        bg-gradient-to-r
        from-primary-blue
        via-purple-400
        to-blue-500 
        background-animate 
        clip-hero ">
            <Navbar />
            <div className="flex w-full">
                <div className="lg:w-1/2 md:w-full sm:w-full text-textcut-black text-center mt-10">
                    <div className="lg:text-6xl text-4xl font-medium font-serif leading-10">Connecting<br></br>you to the<br></br>care you need</div>
                    <div className="mt-10 font-serif ">
                    Find and connect with top doctors online, easily and securely. <br></br>
                    Browse profiles and reviews to find the perfect fit for your medical needs. <br></br>
                    Book appointments and access virtual<br></br> consultations from the comfort of your own home.
                    </div>
                    <button className="btn-log mt-5">Features &gt;</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection