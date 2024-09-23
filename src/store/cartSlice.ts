import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  cost: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action: { payload: CartItem }) => {
      console.log(state.items, action.payload);
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
    },
    removeFromCart: (state, action: { payload: string }) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        state.totalQuantity -= state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    quantityIncrement: (state, action: { payload: string }) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
      }
    },
    quantityDecrement: (state, action: { payload: string }) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
      }
    },
  },
  selectors: {
    getTotalQuantity: (state) => {
      return state.totalQuantity;
    },
    getTotalitems: (state) => {
      return state.items.length;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  quantityDecrement,
  quantityIncrement,
} = cartSlice.actions;

export const { getTotalQuantity, getTotalitems } = cartSlice.selectors;
export default cartSlice.reducer;
