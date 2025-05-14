import React from 'react'
import Card from './Card'

const featuredProp=[{img:'/featuredProp/home1.jpg', text1:'The Haven', text2:"A peaceful sanctuary nestled away from the city's chaos.", key:1},
  {img:'/featuredProp/home2.jpg', text1:'Maple Retreat', text2:"Charming and cozy, surrounded by lush maple trees.", key:2},
  {img:'/featuredProp/home3.jpg', text1:'Sunset Villa', text2:"Enjoy golden hour views from every room in this hilltop villa.", key:3},
  {img:'/featuredProp/home4.jpg', text1:'Oakwood Residence', text2:"Elegant living with timeless oak finishes and modern comforts.", key:4},
  {img:'/featuredProp/home5.jpg', text1:'The Nest', text2:"A compact and cozy home perfect for new beginnings.", key:5},
  {img:'/featuredProp/home6.jpg', text1:'Serenity Heights', text2:"Luxury living above the skyline with unmatched tranquility.", key:6},
  {img:'/featuredProp/home7.jpg', text1:'Crystal Cove', text2:"A coastal gem where ocean breezes and modern elegance meet in perfect harmony.", key:7}
];

const testimonials=[{img:'/testimonials/aaravmehta.jpg', text1:'Aarav Mehta', text2:'"Finding my perfect rental was effortless. The filters made it easy to narrow down exactly what I needed."', key:1},
  {img:'/testimonials/nishaverma.jpg', text1:'Nisha Verma', text2:'"I loved being able to bookmark listings and come back later. It made comparing homes so much easier!"', key:2},
  {img:'/testimonials/kabirshah.jpg', text1:'Kabir Shah', text2:'"The platform is clean, intuitive, and fast. I found a great apartment with all the amenities I wanted."', key:3},
  {img:'/testimonials/priyanair.jpg', text1:'Priya Nair', text2:'"The user reviews helped me avoid a few bad options. This platform really feels like it has been built for renters."', key:4},
  {img:'/testimonials/rahulkapoor.jpg', text1:'Rahul Kapoor', text2:'"I moved cities recently, and this was my go-to tool. I could search by price, location, and type—all in one place."', key:5},
  {img:'/testimonials/snehadesai.jpg', text1:'Sneha Desai', text2:'"Very impressed with how organized and detailed each listing is. I found exactly what I was looking for!"', key:6},
  {img:'/testimonials/adityarao.jpg', text1:'Aditya Rao', text2:'"No more jumping between apps and brokers. Everything I needed was right here."', key:7}
];

const team=[{img:'/team/aaravmehta.jpg', text1:'Aarav Mehta',role:'Chief Executive Officer (CEO)', text2:'Aarav brings over 15 years of experience in real estate consulting and tech entrepreneurship. A Harvard Business School alum, he envisioned Legacy Living as a bridge between digital innovation and luxury property access. His strategic leadership drives the company’s vision and partnerships.', key:1},
  {img:'/team/nainakapoor.jpg', text1:'Naina Kapoor',role:'Chief Operating Officer (COO)', text2:'With a background in operations management from INSEAD and a decade at global real estate firms, Naina ensures seamless execution of daily operations. She specializes in scaling real estate ventures efficiently and oversees compliance, legal, and team dynamics at Legacy Living.', key:2},
  {img:'/team/rishivarma.jpg', text1:'Rishi Varma',role:'Chief Technology Officer (CTO)', text2:'Rishi is a full-stack developer and product strategist with over 12 years in proptech startups. He’s the architect of Legacy Living’s platform—leading backend scalability, user experience design, and AI integrations that personalize property recommendations for users.', key:3},
  {img:'/team/sanadsouza.jpg', text1:'Sana D’Souza',role:'Head of Marketing', text2:'Sana blends storytelling with data to craft impactful marketing strategies. Formerly with a leading digital agency, she’s scaled user growth for several lifestyle brands. At Legacy Living, she manages branding, paid campaigns, and content to build trust and awareness.', key:4},
  {img:'/team/ishaanroy.jpg', text1:'Ishaan Roy',role:'Director of Product', text2:'With dual degrees in design and computer science, Ishaan has a strong product intuition. He leads the UI/UX and product roadmap for Legacy Living, ensuring a frictionless and elegant user experience for both property seekers and sellers.', key:5},
  {img:'/team/meherchaudhary.jpg', text1:'Meher Chaudhary',role:'Lead Real Estate Analyst', text2:'Meher is a data-driven real estate analyst with deep insights into market trends, pricing models, and buyer psychology. With a master’s in Urban Planning, she helps curate top-tier listings and maintains the quality and accuracy of property data across the platform.', key:6},
  {img:'/team/kabirmalhotra.jpg', text1:'Kabir Malhotra',role:'Customer Experience Manager', text2:'Kabir has spent 8+ years in customer success roles across the tech and hospitality sectors. Known for his empathy and problem-solving skills, he leads Legacy Living’s support team and ensures every client’s journey is smooth, informed, and memorable.', key:7}
]

const blogposts1=[{img:'/blogposts1/post1.jpg', role:'Building Your Legacy: The Future of Homeownership', text2:'A look into how real estate is evolving and what homeownership will look like in the next decade.'},
   {img:'', role:'How to Choose the Perfect Property: A Step-by-Step Guide', text2:'Essential tips for first-time buyers and renters to navigate the housing market with confidence.'},
   {img:'', role:'The Art of Home Filtering: Finding Your Ideal Property Online', text2:'Learn how to efficiently use property filters to find a home that suits your lifestyle, budget, and preferences.'}, 
   {img:'', role:'Renting vs. Buying: Which is Right for You?', text2:'An in-depth comparison of the benefits and challenges of renting versus buying a home in today’s market.'}, 
   {img:'', role:'5 Key Factors Influencing Property Prices in 2025', text2:'Insights into the trends and economic factors that are shaping property values for the near future.'}, 
   {img:'', text2:'Explore the latest home design trends and how you can incorporate them into your own space.', role:'Designing Your Dream Home: Trends to Watch in 2025'}, 
   {img:'', text2:'Tips on selecting a neighborhood that offers long-term value, community vibes, and convenience.', role:'Why Location Matters: Choosing the Right Neighborhood for Your Future'}]

const blogposts2=[{img:'', text2:'A guide to using the Legacy Living platform to save and revisit homes that catch your eye.', role:'The Power of Bookmarking: How to Save and Organize Your Favorite Properties'}, 
  {img:'', text2:'An exploration of green homes and why they’re becoming a desirable choice for modern homeowners.', role:'Sustainable Living: Eco-Friendly Homes and How They Add Value'}, 
  {img:'', text2:'How to make the most of smaller living spaces with clever design tips and tech-savvy solutions.', role:'Maximizing Your Space: Smart Home Ideas for Small Apartments'}, 
  {img:'', text2:'Discover the advantages of using technology and digital tools for finding and securing your next home.', role:'The Benefits of a Digital Home Search: Convenience Meets Innovation'}, 
  {img:'', text2:'A deeper dive into how Legacy Living’s features are designed to make the home-finding process easier and more personalized.', role:'How Legacy Living Empowers Your Home Search Journey'}, 
  {img:'', text2:'Guidance on how to successfully rent in a competitive market, including negotiation tactics and finding hidden gems.', role:'Tips for Navigating the Competitive Rental Market'}, 
  {img:'', text2:'A look at the elements that elevate a home from great to luxurious and what to look for in a premium property.', role:'Luxury Living: What Makes a Property Truly Exceptional?'}]

const blogposts3=[{img:'', text2:'Step-by-step advice on how to strategically invest in properties that build wealth over time.', role:'How to Build a Real Estate Investment Portfolio'}, 
  {img:'', text2:'Learn which home features provide the best return on investment when it’s time to sell or rent out your property.', role:'Top 5 Home Features That Increase Resale Value'}, 
  {img:'', text2:'An introduction to smart home technology and how it’s changing the way we live, work, and play in our homes.', role:'The Rise of Smart Homes: What to Expect in the Coming Years'}, 
  {img:'', text2:'Explaining the growing role of virtual property tours in today’s real estate landscape and how they help buyers and renters.', role:'Why Virtual Tours Are Changing the Way We Search for Homes'}, 
  {img:'', text2:'Essential advice for those entering the rental market, including legal tips, rights, and responsibilities.', role:'First-Time Renters: Everything You Need to Know'}, 
  {img:'', text2:'Creative ideas for transforming outdoor areas into functional and beautiful living spaces.', role:"Making the Most of Your Property's Outdoor Space"}, 
  {img:'', text2:'Tips on designing a home office that balances comfort, style, and productivity, especially for remote workers.', role:'Creating a Home Office That Inspires Productivity'}]

const reasonMap={
  featuredProp,
  testimonials,
  team,
  blogposts1,
  blogposts2,
  blogposts3,
};

const HoriCaraousel = (props) => {
  const data=reasonMap[props.reason];
  if (!data) return <div>No data found for "{props.reason}"</div>;
  return (
    <div className="flex flex-col justify-center items-center bg-teal-400/10 backdrop-blur-md border border-teal-500/20 rounded-xl mt-20 gap-4 p-4 w-full h-auto shadow-xl before:opacity-0 overflow-hidden" data-aos="fade-up">
      <h1 className='text-5xl font-bold text-[var(--primary-color)] w-screen text-center' data-aos='fade-left'>{props.heading}</h1>
      
      <div className='w-full overflow-x-auto scroll-smooth scrollbar-hide'>
        <div className='flex justify-center overflow-x-hidden gap-4 p-4 w-max h-auto animate-scroll-loop hover:animate-scroll-loop'>
          {[...data,...data].map((item, index)=>(
            <Card img={item.img} text1={item.text1} text2={item.text2} role={item.role} key={`${item.key}-${index}`} readmore={props.reason=='blogposts1' || props.reason=='blogposts2' || props.reason=='blogposts3'?'true':'false'}/>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default HoriCaraousel