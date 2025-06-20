import {useState, useEffect, createContext} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentPage from './pages/StudentPage';
import AddStudentPage from './pages/AddStudentPage';
import Navbar from './components/Navbar';
import CoursePage from './pages/CoursePage';
import EnrolStudentPage from './pages/EnrolStudentPage';
import Enrollments from './pages/Enrollments';
import LoginPage from './pages/LoginPage';
import { useSelector, useDispatch } from 'react-redux';
import { storeLogin } from './store/AuthSlice';

// const AuthContext = createContext();


function App() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.authReducer.login)

  useEffect(()=>{
    let email = localStorage.getItem('token');
    if(email != null){
      dispatch(storeLogin(true));
    }
  },[login])



  return (
    <BrowserRouter>
    {login && <Navbar/> }
      <Routes>
        {login ? (
          <>
        <Route path='/students' element={<StudentPage /> } />
        <Route path='/addstudent' element={<AddStudentPage />} />
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/enrollstudent' element={<EnrolStudentPage />} />
        <Route path='/enrollments' element={<Enrollments />} />
          </>
        ): (
          <Route path='*' element={<LoginPage /> } />
        )}
 
      </Routes>
    </BrowserRouter>
  );

}
export default App;
