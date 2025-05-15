import React from 'react'
import Card from './Card';

const PropertySection = ({properties}) => {
    // const arr=[]
    // for (let i = 0; i + 6 <= properties.length; i += 6) {
    //     arr.push(
    //       <div key={i} className="grid grid-cols-3 gap-4 mb-8">
    //         {properties.slice(i, i + 6).map((property, index) => (
    //           <Card img={property.propertyImage} text1={property.name} text2={property.description} />
    //         ))}
    //       </div>
    //     );
    //   }
    
    // const remaining = properties.length % 6;
    // if (remaining !== 0) {
    //     const startIndex = properties.length - remaining;
    //     arr.push(
    //       <div key="remaining" className="grid grid-cols-3 gap-4 mb-8">
    //         {properties.slice(startIndex).map((property, index) => (
    //           <Card img={property.propertyImage} text1={property.name} text2={property.description} />
    //         ))}
    //       </div>
    //     );
    //   }
    
    // console.log(properties);
  return (
    <div className='flex items-center gap-2'>
        <div className='bg-teal-700 text-2xl flex items-center justify-center font-bold text-white'><p>{`<`}</p></div>
        {properties.map((p,i)=>{
            // <Card img={p.propertyImage} text1={p.name} text2={p.description} key={i}/>
            console.log(p)
            console.log(p?.bedrooms)
})}
        {/* {arr} */}
        <div className='bg-teal-700 text-2xl flex items-center justify-center font-bold text-white'><p>{`>`}</p></div>
    </div>
  )

}

export default PropertySection