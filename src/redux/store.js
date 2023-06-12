import {configureStore} from '@reduxjs/toolkit'
import authReducer from "./authSlice";
import adminAuthReducer from './adminAuthSlice'
import trainerAuthReducer from './trainerAuthSlice'


export const store=configureStore({
    reducer:{
        user: authReducer,
        admin: adminAuthReducer,
        trainer: trainerAuthReducer,
    }
})
