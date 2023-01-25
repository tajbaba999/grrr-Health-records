import UserCard from "./UserCard"

const About = () => {
  return (
    <div className="w-full
        h-auto
        bg-gradient-to-r
        from-primary-blue
        via-purple-400
        to-blue-500 
        background-animate 
        clip-about
        mt-20 
        pt-60
        lg:pt-40
        text-center
        pb-20
        ">
      <div className="text-4xl font-mono mb-10">
        About Us
      </div>
      <div className="flex flex-wrap justify-between">
        <span className='lg:w-1/3 md:w-1/2 w-full'><UserCard /></span>
        <span className='lg:w-1/3 md:w-1/2 w-full'><UserCard /></span>
        <span className='lg:w-1/3 md:w-1/2 w-full'><UserCard /></span>
      </div>
    </div>
  )
}

export default About