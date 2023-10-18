import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../reducer/slices/authSlice"
import profileReducer from "../reducer/slices/profileSlice"

const rootReducer  = combineReducers({
    auth: authReducer,
    profile: profileReducer
})

export default rootReducer