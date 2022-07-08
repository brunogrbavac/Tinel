import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart';
import checkoutSlice from './checkout';
import successSlice from './success';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    checkout: checkoutSlice,
    success: successSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch