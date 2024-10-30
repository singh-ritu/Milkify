import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  isLoggedIn: boolean;
  isLoggedOut: boolean;
}

const initialState: UserState = {
  name: "",
  isLoggedIn: false,
  isLoggedOut: false,
};

const userSlice = createSlice({
  name: " user",

  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.isLoggedOut = false;
      // console.log(action);
      state.name = action.payload.username;
    },
    // logout: (state, action) => {
    //   (state.isLoggedOut = true),
    //     (state.isLoggedIn = false),
    //     console.log(action);
    //   state.name = "";
    // },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
