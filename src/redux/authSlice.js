import { createSlice } from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode'

const initialState = {
  user:localStorage.getItem('user_authTokens')? jwtDecode(localStorage.getItem("user_authTokens")):null
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user
    },
    logoutUser:(state,action)=>{
      state.user=null
      localStorage.removeItem('user_authTokens')
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLogin,logoutUser} = authSlice.actions

export default authSlice.reducer


// localStorage.getItem('user_authtokens')? jwtDecode(localStorage.getItem("user_authtokens")):