import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

// Initial State
const initialState = {
  cart: [],
};

// Reducer Function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the product is already in cart
      const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        // If already in cart, update quantity
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity++;
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // If not in cart, add new item
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
