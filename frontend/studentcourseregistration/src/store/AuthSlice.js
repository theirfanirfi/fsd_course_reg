import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        login: false
    },
    reducers: {
        storeLogin: (state, action) => {
            state.login = action.payload
        }
    }
})

export const {storeLogin} = authSlice.actions
export default authSlice.reducer