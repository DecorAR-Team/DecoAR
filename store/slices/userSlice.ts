import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  _id: string,
  username: string,
  email: string,
  token: string,
  createdAt: string,
  updatedAt: string,
  profilePicture: string,
}

const initialState: UserState = {
  _id: '',
  username: 'charbel',
  email: '',
  token: '',
  createdAt: '',
  updatedAt: '',
  profilePicture: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload
    },
    clearUser: (state) => {
      state = initialState
    },
  },
})

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;