import express from "express";
const enrollment_router= express.Router();
import enrollments from "../data/enrollments.js";
import students from "../data/students.js";
import courses from "../data/courses.js";

enrollment_router.get('/', (req, res, next)=>{
    res.status(200).json(
        {enrollments}
    )
})

enrollment_router.post('/', (req, res, next)=>{
    let {student_id,course_id} = req.body
    let student = students.find(student => student.id==student_id)
    let course = courses.find(course=>course.id == course_id)
    let last_enrollment_id = enrollments[enrollments.length-1].id
    let enrollment = {
        id: last_enrollment_id+1,
        student: student,
        course: course
    }

    enrollments.push(enrollment)

    res.status(200).json({
        isEnrolled: true
    })



})

enrollment_router.delete('/:id', (req,res,next)=> {
    let {id} = req.params
    console.log(id)
    let enrollment = enrollments.find(e => e.id == id)
    let index = enrollments.indexOf(enrollment)
    enrollments.splice(index, 1)
    res.status(200).json({isDeleted:true, enrollments: enrollments});
})

export default enrollment_router;