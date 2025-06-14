import express from "express";
const course_router = express.Router();
import courses from "../data/courses.js";


course_router.get('/', (request, response, next) => {
    response.status(200).json({
        data: courses
    });
});

course_router.post('/', (req, res, next)=>{
    let newCourse = req.body
    courses.push(newCourse);

    res.status(200).json({
        message: "Course added successfully",
        course: newCourse,
    })
});

course_router.delete('/:id', (req, res, next) => {
    let {id} = req.params

    let course = courses.find(course => course.id == id)

    if(course){
        let index = courses.indexOf(course)

        courses.splice(index, 1)

        res.status(200).json({
            isDeleted: true,
            courses: courses,
            message: "Course deleted."
        })
    }else {
        res.status(404).json({
            isDeleted: false,
            message: "course with this id not found"
        })
    }
});

// course_router.put();


export default course_router;