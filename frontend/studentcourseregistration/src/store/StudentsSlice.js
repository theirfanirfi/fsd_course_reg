import { createSlice } from "@reduxjs/toolkit";
const studentSlice = createSlice({
    name: 'studentSlice',
    initialState: {
        students: []
    },
    reducers: {
        storeStudents: (state, action) => {
            // console.log('storestudents', state, action)
            state.students = action.payload
        },
    }

});

export const {storeStudents} = studentSlice.actions
export default studentSlice.reducer