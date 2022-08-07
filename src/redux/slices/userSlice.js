import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },

  reducers: {

    login (state, action) {
      state.user = action.payload
    },
    
  }

})

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions

// Export reducer as default
export default userSlice.reducer