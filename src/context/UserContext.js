// context/UserContext.js
'use client';
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [apidata,setApiData] = useState([]);

  const addUser = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  const loginUser = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const fetchData= async ()=>{
    try {
        const res = await fetch('https://uk-real-estate-rightmove.p.rapidapi.com/buy/property-for-sale?identifier=REGION%5E1036&sort_by=HighestPrice&search_radius=0.0&added_to_site=1', {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '2887f84f5amshd26bfd55f048312p186a8cjsnf4dfb73103c1',
            'x-rapidapi-host': 'uk-real-estate-rightmove.p.rapidapi.com',
          },
        });
    
        if (!res.ok) {
          throw new Error('Failed to fetch property data');
        }
    
        const response = await res.json();
        // console.log(res);
        // console.log(response); // or set it in state
        // const new_=response.data.map((property,index)=>({
        //     bedrooms: property.bedrooms,
        //     address: property.displayAddress,
        //     displayedPrice: property.price.displayPrices[0].displayPrice,
        //     propertyImage: property.propertyImages.mainImageSrc,
        //     description: property.summary,
        //     price: property.price.amount,
        //     name: property.customer.branchDisplayName.split(',')[0]
        // }))
        if(response?.data){
          setApiData(response.data);
          // console.log(response.data,apidata)
        }
        
    
      } catch (error) {
        console.error('Error fetching property data:', error);
        return null;
      }
  }

  return (
    <UserContext.Provider value={{ users, addUser, loginUser, currentUser, apidata, fetchData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
