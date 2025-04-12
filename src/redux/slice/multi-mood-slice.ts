import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModeState {
  lightMode: boolean;
}

const initialState: ModeState = {
  lightMode: true,
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setLightMode: (state, action: PayloadAction<boolean>) => {
      state.lightMode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLightMode } = modeSlice.actions;

export default modeSlice.reducer;
