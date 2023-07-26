import {createSlice} from '@reduxjs/toolkit';

export const resturantSlice = createSlice({
  name: 'resturant',
  initialState: [
    {
      id: 1,
      time: 25,
      deliverycost: 'free',
      price: 5,
      name: 'Cookie Sandwich',
      category: 'Seafood',
      ratingstar: 4.5,
      rating: 250,
      title: 'McDonalds',
      State: 'America',
      State2: 'as',
      priceRange: '$$',
      subtitle: 'Shortbread, chocolate turtle cookies, and red velvet.',
      food: 'Deshi food',
      status: 'pending',
      image:
        'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    },
    {
      id: 2,
      time: 25,
      deliverycost: 'free',
      price: 5,
      name: 'Combo Burger',
      category: 'Appetizers',
      ratingstar: 4.5,
      rating: 250,
      title: 'Mayfield Bakery & Cafe',
      priceRange: '$$',
      State: 'America',
      State2: 'as',
      subtitle: 'Shortbread, chocolate turtle cookies, and red velvet.',
      food: 'Deshi food',
      status: 'pending',
      featured: true,
      image:
        'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    },
    {
      id: 3,
      time: 25,
      deliverycost: 'free',
      price: 5,
      name: 'Combo Sandwich',
      category: 'Appetizers',
      ratingstar: 4.5,
      rating: 250,
      title: 'McDonalds',
      priceRange: '$$',
      State: 'America',
      State2: 'as',
      subtitle: 'Shortbread, chocolate turtle cookies, and red velvet.',
      food: 'Deshi food',
      status: 'paid',
      featured: true,
      image:
        'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    },
    {
      id: 4,
      time: 25,
      deliverycost: 'free',
      price: 5.1,
      name: 'Oyster Dish',
      category: 'Appetizers',
      ratingstar: 4.5,
      rating: 250,
      title: 'McDonalds',
      priceRange: '$$',
      State: 'America',
      State2: 'as',
      subtitle: 'Shortbread, chocolate turtle cookies, and red velvet.',
      food: 'Deshi food',
      status: 'paid',
      featured: true,
      image:
        'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    },
    {
      id: 5,
      time: 25,
      deliverycost: 'free',
      name: 'Oyster On Ice',
      category: 'Appetizers',
      price: 7.4,
      ratingstar: 4.5,
      rating: 250,
      title: 'McDonalds',
      priceRange: '$$',
      State: 'America',
      State2: 'as',
      subtitle: 'Shortbread, chocolate turtle cookies, and red velvet.',
      status: 'paid',
      food: 'Deshi food',
      image:
        'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    },
    {
      id: 6,
      time: 25,
      deliverycost: 'free',
      name: 'Fried Rice on Pot',
      category: 'Appetizers',
      price: 7.4,
      ratingstar: 4.5,
      rating: 250,
      title: 'McDonalds',
      priceRange: '$$',
      State: 'America',
      State2: 'as',
      subtitle: 'Shortbread, chocolate turtle cookies, and red velvet.',
      status: 'paid',
      featured: true,
      food: 'Deshi food',
      image:
        'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    },
  ],

  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const {changeName, changePassword, changeEmail, changePhone} =
  resturantSlice.actions;
export default resturantSlice.reducer;
