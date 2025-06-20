import {useState, useEffect, useContext} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { storeStudents } from '../store/StudentsSlice'
const StudentPage = () => {
    const dispatch = useDispatch()
    const students = useSelector((state) => state.studentReducer.students)
    // console.log('students redux', stds);
    const get_all_students = () => {
        let URL = "http://localhost:5000/api/students/"
        fetch(URL, {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch(storeStudents(response.data))
            // setStudents(response.data);
        })
    }

    useEffect(()=>{
        get_all_students()
        // console.log('context',authContext);
    },[])

    const delete_student = (student) => {
        let URL = `http://localhost:5000/api/students/${student._id}`
        fetch(URL, {
            method: 'DELETE',
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(response => {
            if(response.isDeleted){
                // setStudents(response.students)
            }else {
                alert("Student could not be deleted at the moment.");
            }
        })
    }

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
                    <td>{student.id}</td>
                    <td>{student.first_name+' '+student.last_name}</td>
                    <td>{student.gender}</td>
                    <td>
                        <button>Edit</button>
                        <button onClick={() => delete_student(student)}>Delete</button>
                    </td>
                </tr>
                    )
                })}

            </tbody>
        </table>
    )
}

export default StudentPage;