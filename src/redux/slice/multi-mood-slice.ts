import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModeState {
  lightMode: boolean;
  EnOrFa: boolean;
  modal: boolean;
  selectedCart: null | {
    id: string;
    src: string;
    title: string;
    desc: string;
    about: string;
  };
}

const initialState: ModeState = {
  lightMode: true,
  EnOrFa: true,
  modal: false,
  selectedCart: null,
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
    setModal: (state, action) => {
      state.modal = action.payload;
    },
    setSelectedCart: (state, action) => {
      state.selectedCart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLightMode, setLanguage, setModal, setSelectedCart } =
  modeSlice.actions;

export default modeSlice.reducer;
