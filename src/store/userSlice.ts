import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  name: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: " user",

  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      console.log(action);

      state.name = action.payload.username;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
