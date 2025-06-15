import {useState, useEffect, createContext} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentPage from './pages/StudentPage';
import AddStudentPage from './pages/AddStudentPage';
import Navbar from './components/Navbar';
import CoursePage from './pages/CoursePage';
import EnrolStudentPage from './pages/EnrolStudentPage';
import Enrollments from './pages/Enrollments';
import LoginPage from './pages/LoginPage';

const AuthContext = createContext();


function App() {
  const [login, setLogin] = useState(false);

  useEffect(()=>{
    let email = localStorage.getItem('token');
    if(email != null){
      setLogin(true);
    }
  },[login])



  return (
    <BrowserRouter>
    <AuthContext.Provider value={{login: login, setLogin: setLogin}}>
      <>
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
      </>
      </AuthContext.Provider>
    </BrowserRouter>
  );

}
export {AuthContext};
export default App;
