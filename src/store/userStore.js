import { create } from 'zustand';

const useUserStore = create((set, get) => ({
  // State
  users: [],
  currentUser: null,
  apidata: [],

  // Actions
  addUser: (user) => {
    set((state) => ({
      users: [...state.users, user]
    }));
  },

  loginUser: (username, password) => {
    const { users } = get();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      set({ currentUser: user });
      return true;
    }
    return false;
  },

  fetchData: async () => {
    const url = 'https://zoopla.p.rapidapi.com/properties/v2/list?locationValue=Oxford%2C%20Oxfordshire&locationIdentifier=oxford&category=residential&furnishedState=Any&sortOrder=newest_listings&page=1';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '05f2abb2f9mshb8835bd3deede0dp1486abjsn56b01026912c',
        'x-rapidapi-host': 'zoopla.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      console.log(response);
    
      if (!response.ok) {
        throw new Error('Failed to fetch property data');
      }
    
      const result = await response.json();
      console.log('test', result);
      if (result?.data) {
        set({ apidata: result.data });
        console.log(result.data);
      }
        
    } catch (error) {
      console.error('Error fetching property data:', error);
      return null;
    }
  },

  // Additional utility actions
  logoutUser: () => {
    set({ currentUser: null });
  },

  clearApiData: () => {
    set({ apidata: [] });
  }
}));

export default useUserStore; 