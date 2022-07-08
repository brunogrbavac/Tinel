import { createSlice } from '@reduxjs/toolkit';

export interface CheckoutState {
  visible: boolean;
};

const initialState: CheckoutState = {
    visible: false,
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    toggleCheckout: (state) => {
      state.visible = !state.visible;    

    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;