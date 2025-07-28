import React from 'react'
import Card from './Card'

import featuredProp from '@/app/data/featuredProp.json'
import testimonials from '@/app/data/testimonials.json'
import team from '@/app/data/team.json'
import blogposts from '@/app/data/blogposts.json'

const reasonMap={
  featuredProp: featuredProp.featuredProp,
  testimonials: testimonials.testimonials,
  team: team.team,
  blogposts1: blogposts.blogposts1,
  blogposts2: blogposts.blogposts2,
  blogposts3: blogposts.blogposts3,
};

const HoriCaraousel = (props) => {
  const data=reasonMap[props.reason];
  if (!data) return <div>No data found for "{props.reason}"</div>;
  
  // Ensure data is an array
  const dataArray = Array.isArray(data) ? data : [];
  if (dataArray.length === 0) return <div>No data available for "{props.reason}"</div>;
  return (
    <div className="flex flex-col justify-center items-center bg-teal-400/10 backdrop-blur-md border border-teal-500/20 rounded-xl mt-10 md:mt-20 gap-2 md:gap-4 p-2 md:p-6 w-full h-auto shadow-xl before:opacity-0 overflow-hidden" data-aos="fade-up">
      <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--primary-color)] w-full text-center px-2 md:px-4'>{props.heading}</h1>
      
      <div className='w-full overflow-x-auto scroll-smooth scrollbar-hide'>
        <div className='flex justify-center overflow-x-hidden gap-2 md:gap-4 p-2 md:p-4 w-max h-auto animate-scroll-loop hover:animate-scroll-loop'>
          {[...dataArray,...dataArray].map((item, index)=>(
            <Card img={item.img} text1={item.text1} text2={item.text2} role={item.role} key={`${item.key}-${index}`} readmore={props.reason=='blogposts1' || props.reason=='blogposts2' || props.reason=='blogposts3'?'true':'false'}/>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default HoriCaraousel