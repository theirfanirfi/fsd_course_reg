import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { storeCourses } from '../store/CourseSlice'
import useGet from '../myhooks/useGet'

const CoursePage = () => {
    useGet("courses/",storeCourses)
    const courses = useSelector((state) => state.courseReducer.courses)


    const delete_course = (course) => {
        let URL = `http://localhost:5000/api/courses/${course.id}`
        fetch(URL, {
            method: 'DELETE',
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(response => {
            if(response.isDeleted){
                // setCourses(response.courses)
            }else {
                alert("Course could not be deleted at the moment.");
            }
        })
    }

    return (
        <table border="1" style={{margin:20}}>
            <thead>
                <th>Id</th>
                <th>Title</th>
                <th>Action</th>
            </thead>

            <tbody>
                {courses.map(course => {
                    return (
                     <tr>
                    <td>{course.id}</td>
                    <td>{course.title}</td>
                    <td>
                        <button>Edit</button>
                        <button onClick={() => delete_course(course)}>Delete</button>
                    </td>
                </tr>
                    )
                })}

            </tbody>
        </table>
    )
}

export default CoursePage;