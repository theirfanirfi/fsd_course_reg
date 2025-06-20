import {useState, useEffect} from 'react'
import style from "../styling/StudentFormStyle";
import { useSelector } from 'react-redux';
const EnrolStudentPage = () => {
    const students = useSelector((state)=> state.studentReducer.students);
    const courses = useSelector((state) => state.courseReducer.courses);
    
    const [enrollment, setEnrollment] = useState({
        course_id: '',
        student_id: '',
    });

    const enrollStudent = () => {
        let URL = "http://localhost:5000/api/enrollments"
        fetch(URL, {method: "POST",
            body: JSON.stringify(enrollment),
            headers: {
                'content-type': 'application/json',
                "Authorization": localStorage.getItem('token')
            }
        }).then(res => res.json())
        .then(res => {
            console.log(res);
        })
    }



    useEffect(()=>{
    }, [null])


    return (
        <div>
        <div style={style.div}>
            <label>Select Student</label>
            <select onChange={(e)=>setEnrollment({...enrollment, student_id: e.target.value})} style={style.input}>
                {students.length > 0 && students.map(student => <option value={student.id}>{student.first_name+ ' '+student.last_name}</option>)}
            </select>
        </div>

        <div style={style.div}>
            <label>Select Course</label>
            <select 
            onChange={(e)=>setEnrollment({...enrollment, course_id: e.target.value})} 
            style={style.input}>
              {courses.length > 0 && courses.map(course => <option value={course.id}>{course.title}</option>)}
            </select>
        </div>

        <div style={style.div}>
            <button style={style.button} onClick={enrollStudent} >Enroll Student</button>
        </div>

        </div>
    )
}

export default EnrolStudentPage;