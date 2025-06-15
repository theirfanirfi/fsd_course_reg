import mongoose from "mongoose";

let StudentSchema = new mongoose.Schema({
    "first_name": String,
    "last_name": String,
    "gender": String,
    "email": {
        type: String,
        unique: true
    }
})

let StudentModel = mongoose.model('students', StudentSchema);
export default StudentModel;