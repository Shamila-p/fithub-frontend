import { createSlice } from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode'

const initialState = {
  trainer:localStorage.getItem('trainer_authTokens')? jwtDecode(localStorage.getItem("trainer_authTokens")):null
}

const trainerAuthSlice = createSlice({
  name: 'trainer',

    initialState,
    reducers:{
        setLogin: (state, action) => {
            state.trainer = action.payload.trainer
          },
          logoutTrainer:(state,action)=>{
            state.trainer=null
            localStorage.removeItem('trainer_authTokens')
          }
    }
})

export const { setLogin,logoutTrainer} = trainerAuthSlice.actions
export default trainerAuthSlice.reducer
