import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: 'courseSlice',
    initialState: {
        courses: []
    },
    reducers: {
        storeCourses: (state,action) => {
            state.courses = action.payload
        }
    }
})

export const {storeCourses} = courseSlice.actions
export default courseSlice.reducer