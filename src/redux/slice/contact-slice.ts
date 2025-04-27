import { createSlice } from "@reduxjs/toolkit";
import { ContactType } from "../../validation/contact.schema";

export interface ContactState {
  validationErrors: Partial<ContactType>;
  name: string;
  email: string;
  message: string;
}

const initialState: ContactState = {
  validationErrors: {},
  name: "",
  email: "",
  message: "",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setValidationErrors: (state, action) => {
      state.validationErrors = action.payload;
    },
    resetForm: (state) => {
      state.name = "";
      state.email = "";
      state.message = "";
      state.validationErrors = {};
    },
  },
});

export const { setName, setEmail, setMessage, setValidationErrors, resetForm } =
  contactSlice.actions;

export default contactSlice.reducer;
