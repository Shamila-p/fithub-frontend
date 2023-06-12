import { createSlice } from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode'

const initialState = {
  admin:localStorage.getItem('authTokens')? jwtDecode(localStorage.getItem("authTokens")):null
}

const adminAuthSlice = createSlice({
    name: 'admin',

    initialState,
    reducers:{
        setLogin: (state, action) => {
            state.admin = action.payload.admin
          },
          logoutAdmin:(state,action)=>{
            state.admin=null
            localStorage.removeItem('authTokens')
          }
    }
})

export const { setLogin,logoutAdmin} = adminAuthSlice.actions
export default adminAuthSlice.reducer
