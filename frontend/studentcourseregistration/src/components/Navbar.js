import {useContext} from 'react'
import { AuthContext } from "../App"
import { Link, useNavigate } from "react-router-dom"
const Navbar = () => {
    const navigate = useNavigate()
    const authContext = useContext(AuthContext);

    return (
        <ul>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/addstudent">Add Student</Link></li>
            <li><Link to="/enrollstudent">Enroll Student</Link></li>
            <li><Link to="/enrollments">Enrollments</Link></li>
            <li><button onClick={()=>{
                localStorage.clear()
                authContext.setLogin(false)
             navigate("/login");

            }}>Logout</button></li>
        </ul>
    )
}

export default Navbar;