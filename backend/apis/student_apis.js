import express from "express";
const student_router = express.Router()
import students from '../data/students.js'
import users from "../data/users.js";


student_router.use(function(req, res, next){
    

    let headers = req.headers
    if('authorization' in headers){
        
        let email = headers['authorization']
        let user = users.find(u => u.email == email);
        console.log('user', user);
        if(user){
            next()
        }else {
            res.status(400).json({
                'isLoggedIn': false,
                'message': "You are not logged in"
            })
        }
    }else {
                    res.status(400).json({
                'isLoggedIn': false,
                'message': "You are not logged in"
            })
    }
})

student_router.get('/', (request, response, next) => {
    response.status(200).json({
        data: students
    });
});

student_router.post('/', (req, res, next)=>{
    let newStudent = req.body
    console.log(newStudent);
    students.push(newStudent);

    res.status(200).json({
        message: "Student added successfully",
        student: newStudent,
    })
});

student_router.delete('/:id', (req, res, next) => {
    let {id} = req.params

    let student = students.find(student => student.id == id)

    if(student){
        let index = students.indexOf(student)

        students.splice(index, 1)

        res.status(200).json({
            students: students,
            message: "Student deleted.",
            isDeleted: true,
        })
    }else {
        res.status(404).json({
            message: "Student with this id not found",
            isDeleted: false
        })
    }
});

// student_router.put();


export default student_router;