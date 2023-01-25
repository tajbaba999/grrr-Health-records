import React from 'react'
import FlipCard from './FlipCard'

const FeaturesSection = () => {
    const sources = [
        "/blockchain-color.png",
        "/clock.png",
        "/medical-color.png",
        "/piggy-bank-color.png",
        "/partners-color.png",
        "report-color.png"
    ];

    const cardTitle = [
        "Blockchain",
        "Fast", 
        "Heal",
        "Economic",
        "Support",
        "Reports"
    ];

  return (
    <div className="flex justify-center mt-5 w-full">
        <div className="text-center w-3/4 bg-white">
            <div className="text-4xl font-mono mb-5">Features</div>
            <div className='flex flex-wrap justify-between'>
                <span className='lg:w-1/3 md:w-1/2 w-full'><FlipCard title={cardTitle[0]} imgSrc={sources[0]} /></span>
                <span className='lg:w-1/3 md:w-1/2 w-full'><FlipCard title={cardTitle[1]} imgSrc={sources[1]}/></span>
                <span className='lg:w-1/3 md:w-1/2 w-full'><FlipCard title={cardTitle[2]} imgSrc={sources[2]}/></span>
                <span className='lg:w-1/3 md:w-1/2 w-full'><FlipCard title={cardTitle[3]} imgSrc={sources[3]}/></span>
                <span className='lg:w-1/3 md:w-1/2 w-full'><FlipCard title={cardTitle[4]} imgSrc={sources[4]}/></span>
                <span className='lg:w-1/3 md:w-1/2 w-full'><FlipCard title={cardTitle[5]} imgSrc={sources[5]}/></span>
            </div>
        </div>
    </div>
  )
}

export default FeaturesSection