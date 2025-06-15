import {useState, useEffect} from 'react'
import style from "../styling/StudentFormStyle";
const EnrolStudentPage = () => {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
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


    const fetch_students_courses = async () => {
        let URL = "http://localhost:5000/api/students"
        let URL1 = "http://localhost:5000/api/courses"

        let response_student = await fetch(URL, {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
        response_student = await response_student.json()

        let response_course = await fetch(URL1, {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
        response_course = await response_course.json()
        console.log(response_student.data)
        console.log(response_course.data)
        setStudents(response_student.data)
        setCourses(response_course.data)
    }

    useEffect(()=>{
        fetch_students_courses();
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