import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentPage from './pages/StudentPage';
import AddStudentPage from './pages/AddStudentPage';
import Navbar from './components/Navbar';
import CoursePage from './pages/CoursePage';
import EnrolStudentPage from './pages/EnrolStudentPage';
import Enrollments from './pages/Enrollments';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/students' element={<StudentPage />} />
        <Route path='/addstudent' element={<AddStudentPage />} />
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/enrollstudent' element={<EnrolStudentPage />} />
        <Route path='/enrollments' element={<Enrollments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
