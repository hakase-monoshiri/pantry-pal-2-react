import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },

  reducers: {

    login (state, action) {
      console.log(action);
      fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify( { user: action.payload }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                console.log(data);
                alert(data.error)
            }
            else {
            localStorage.setItem("jwt", data.jwt);
            console.log(data);
            // save the user somewhere (in state!) to log the user in
            state.user = data.user
            }
        });
    },
    
  }

})

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions

// Export reducer as default
export default userSlice.reducer