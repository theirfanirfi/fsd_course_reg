import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { storeLogin } from "../store/AuthSlice";
const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const login = useSelector((state) => state.authReducer.login)

    return (
        <ul>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/addstudent">Add Student</Link></li>
            <li><Link to="/enrollstudent">Enroll Student</Link></li>
            <li><Link to="/enrollments">Enrollments</Link></li>
            <li><button onClick={()=>{
                localStorage.clear()
                dispatch(storeLogin(false));
             navigate("/login");

            }}>Logout</button></li>
        </ul>
    )
}

export default Navbar;