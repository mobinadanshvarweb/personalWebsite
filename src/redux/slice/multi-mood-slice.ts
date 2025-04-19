import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModeState {
  lightMode: boolean;
  EnOrFa: boolean;
}

const initialState: ModeState = {
  lightMode: true,
  EnOrFa: true,
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setLightMode: (state, action: PayloadAction<boolean>) => {
      state.lightMode = action.payload;
    },
    setLanguage: (state, action: PayloadAction<boolean>) => {
      state.EnOrFa = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLightMode, setLanguage } = modeSlice.actions;

export default modeSlice.reducer;
