import { useSelector } from 'react-redux'
import { storeStudents } from '../store/StudentsSlice'
import useGet from '../myhooks/useGet'
import delete_request from '../myhooks/delete_request'



const StudentPage = () => {
    useGet("students/", storeStudents);

    const students = useSelector((state) => state.studentReducer.students)

    return (
        <table border="1" style={{margin:20}}>
            <thead>
                <th>Id</th>
                <th>Full name</th>
                <th>Gender</th>
                <th>Action</th>
            </thead>

            <tbody>
                {students.map(student => {
                    return (
                     <tr>
                    <td>{student._id}</td>
                    <td>{student.first_name+' '+student.last_name}</td>
                    <td>{student.gender}</td>
                    <td>
                        <button>Edit</button>
                        <button onClick={() => {
                            delete_request(`students/${student._id}`, null);
                        }}>Delete</button>
                    </td>
                </tr>
                    )
                })}

            </tbody>
        </table>
    )
}

export default StudentPage;