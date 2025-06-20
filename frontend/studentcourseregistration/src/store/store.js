import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './StudentsSlice';
import courseReducer from './CourseSlice'
import authReducer from  './AuthSlice'
export default configureStore({
  reducer: {
    studentReducer: studentReducer,
    courseReducer: courseReducer,
    authReducer: authReducer
  },
})