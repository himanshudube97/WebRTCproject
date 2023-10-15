import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuth: false,
  user: null,
  otp: {
    phone: "",
    hash: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      console.log(action.payload, "hel");
      const { user } = action.payload;
      state.user = user;
      state.isAuth = user === null ? false : true;
    },
    setOtp: (state, action) => {
      const { phone, hash } = action.payload; //payload is the data we send when we call this reducer function.
      state.otp.phone = phone;
      state.otp.hash = hash;
    },
  },
});

export const { setAuth, setOtp } = authSlice.actions;

export default authSlice.reducer;
//exporting authSlice, actions and reducers both.
//we change state using reducer functions.
