import React from 'react'
import Card from './Card'
import { iconMap } from './IconMap';

const milestones = [
    { year: '2019', title: 'Legacy Living Founded', description: 'Our journey began with a vision to redefine modern real estate.' },
    { year: '2020', title: 'Platform Launch', description: 'Launched our web platform, connecting users with premium listings.' },
    { year: '2021', title: 'Reached 10,000 Users', description: 'Surpassed 10k active users with exceptional customer satisfaction.' },
    { year: '2022', title: 'Partnered with Builders', description: 'Teamed up with leading developers to expand our offerings.' },
    { year: '2023', title: 'AI-Powered Recommendations', description: 'Introduced intelligent property matching features.' },
    { year: '2024', title: 'Pan-India Expansion', description: 'Now serving clients in 12 major cities across India.' }
  ];

const LeftIcon=iconMap['leftIcon']

const RightIcon=iconMap['rightIcon']

const HistoryTimeline = () => {
  return (
    <div className='relative overflow-x-hidden ml-30 mt-20 mb-20 rounded-2xl'>
        <h1 className='relative text-[var(--primary-color)] font-bold md:text-6xl mb-20 left-[30%] sm:left-0 sm:text-5xl sm:text-center'>Our History</h1>
        <div className="absolute top-30 left-[43.2%] w-[6px] h-0 bg-[var(--secondary-color)] z-[-1] animate-move-line rounded-4xl"></div>
        {milestones.map((item, index)=>(
            <div key={index} className={`relative p-3 bg-teal-600/20 backdrop-blur-md border border-teal-500/20 rounded-xl w-max ${index%2==0?'left-[7%]':'left-[49%]'}`}>
                {index%2==0?<LeftIcon className='text-transparent bg-[var(--primary-color)] rounded-[50%] w-[40px] absolute right-[-100px] top-[32px] z-10'/>
                :<RightIcon className='text-transparent bg-[var(--primary-color)] rounded-[50%] w-[40px] absolute top-[32px] z-10 left-[-100px]'/>}
                <Card text1={item.title} text2={item.description} role={item.year} lr='true'/>
            </div>
        ))}
    </div>
  )
}
export default HistoryTimeline

