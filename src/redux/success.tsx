import { createSlice } from '@reduxjs/toolkit';

export interface SuccessState {
  visible: boolean;
};

const initialState: SuccessState = {
    visible: false,
};

export const successSlice = createSlice({
  name: 'success',
  initialState,
  reducers: {
    toggleSuccess: (state) => {
      state.visible = !state.visible;    
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSuccess } = successSlice.actions;
export default successSlice.reducer;