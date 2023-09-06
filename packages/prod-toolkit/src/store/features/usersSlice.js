import { createSlice } from "@reduxjs/toolkit";
import { usersApi } from "../../api";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    users: null,
    error: null,
  },
  reducers: {
    isLoadingUsers: (state) => {
      // state.value -= 1
      state.isLoading = true;
    },
    usersSuccess: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
        state.isLoading = false;
        state.users = action.payload;
    },
    erroUsers: (state) => {
        state.isLoading = false;
        state.error = action.payload;
    }
  },
});

export const fetchUsers = () => async dispatch => {
       try {
           await usersApi.getUsers()
               .then((response) => dispatch(usersSuccess(response.data)))
       }
       catch (e) {
        return console.error(e.message);
    }
}

// Action creators are generated for each case reducer function
export const { isLoadingUsers, usersSuccess } = usersSlice.actions;

export default usersSlice.reducer;
