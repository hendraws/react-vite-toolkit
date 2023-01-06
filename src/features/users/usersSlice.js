import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "dave" },
  { id: "2", name: "tono" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
