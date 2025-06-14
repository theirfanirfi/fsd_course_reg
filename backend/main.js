import express from 'express'
import cors from 'cors'
const app = express()
const port = 5000
import bodyParser from 'body-parser';
import student_router from './apis/student_apis.js'
import course_router from './apis/courses_apis.js';
import enrollment_router from './apis/enrollment_api.js';
import user_router from './apis/user_api.js';
import users from './data/users.js';

app.use(cors())
app.use(bodyParser.json())



app.use('/api/students/', student_router);
app.use('/api/courses/', course_router);
app.use('/api/enrollments/', enrollment_router);
app.use('/api/users/', user_router);


app.listen(port, ()=>{
    console.log("application is running");
})