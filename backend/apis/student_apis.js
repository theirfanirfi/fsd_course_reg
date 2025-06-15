import express from "express";
const student_router = express.Router()
import students from '../data/students.js'
import AuthWare from "../middlewares/AuthWare.js";
import StudentModel from "../models/StudentModel.js";


student_router.use(AuthWare);

student_router.get('/', async (request, response, next) => {
    let studentss = await StudentModel.find({});
    response.status(200).json({
        data: studentss
    });
});

student_router.post('/', async (req, res, next) => {
    let newStudentData = req.body
    // console.log(newStudent);

    let newStudent = new StudentModel(newStudentData)
    newStudent = await newStudent.save()

    if(newStudent){

    res.status(200).json({
        message: "Student added successfully",
        student: newStudent,
    })
}else {
      res.status(400).json({
        message: "Student not added.",
        student: null,
    })  
}
});

student_router.delete('/:id', async (req, res, next) => {
    let { id } = req.params

    // let student = students.find(student => student.id == id)
    let student = await StudentModel.deleteOne({_id: id});
    console.log('student deleted', student);

    if (student) {
        let students = await StudentModel.find({});
        res.status(200).json({
            students: students,
            message: "Student deleted.",
            isDeleted: true,
        })
    } else {
        res.status(404).json({
            message: "Student with this id not found",
            isDeleted: false
        })
    }
});

student_router.put("/:id", async (req, res, next)=>{
    let {id} = req.params
    let studentData = req.body
    let student = await StudentModel.findOne({_id: id})
    if(student != null){
        student.first_name = studentData.first_name
        student.last_name = studentData.last_name
        student.email = studentData.email
        student.gender = studentData.gender

        let isUpdated = await student.save()

        if(isUpdated){
        res.status(200).json({
            'isStudentUpdated': true,
            'message': "Student updated",
        })
        }else {
         res.status(400).json({
            'isStudentUpdated': false,
            'message': "Student could not be updated",
        })
        }
    }else {
        res.status(400).json({
            'isStudentUpdated': false,
            'message': "Student not found",
        })
    }
});


export default student_router;