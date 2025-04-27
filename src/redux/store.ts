import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./slice/multi-mood-slice";
import contactSlice from "./slice/contact-slice";

export const store = configureStore({
  reducer: {
    mode: modeSlice,
    contact: contactSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
