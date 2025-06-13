import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <ul>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/addstudent">Add Student</Link></li>
            <li><Link to="/enrollstudent">Enroll Student</Link></li>
            <li><Link to="/enrollments">Enrollments</Link></li>
        </ul>
    )
}

export default Navbar;