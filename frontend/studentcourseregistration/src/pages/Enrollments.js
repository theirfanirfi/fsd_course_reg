import {useState, useEffect} from 'react'
const Enrollments = () => {
const [enrollments, setEnrollments] = useState([])

const fetch_enrollments = () => {
    let URL = "http://localhost:5000/api/enrollments"
    fetch(URL, {
        headers: {
            "Authorization": localStorage.getItem('token')
        }
    })
    .then(res => res.json())
    .then(res => {
        setEnrollments(res.enrollments);
    })
}

const deleteEnrollment =(enrollment) => {
    let URL =`http://localhost:5000/api/enrollments/${enrollment.id}`
    fetch(URL, {
        method: "delete",
        headers: {
            "Authorization": localStorage.getItem('token')
        }
    })
    .then(res => res.json())
    .then(res => {
        if(res.isDeleted){
            setEnrollments(res.enrollments)
        }
    })
}

useEffect(()=>{
    fetch_enrollments()
},[null])

return (
    <div>
        <table>
            <thead>
                <th>id</th>
                <th>Student</th>
                <th>Course</th>
                <th>Action</th>
            </thead>

            <tbody>
                {enrollments.length > 0 && enrollments.map(enrollment => {
                    if(enrollment.student){
                    return (
                        <tr>
                            <td>{enrollment.id}</td>
                            <td>{enrollment.student.first_name}</td>
                            <td>{enrollment.course.title}</td>
                            <td><button onClick={() => deleteEnrollment(enrollment)}>Delete</button></td>
                        </tr>
                    )
                }
                })}
            </tbody>
        </table>
    </div>
)


}

export default Enrollments;