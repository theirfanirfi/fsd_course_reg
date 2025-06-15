import {useState} from 'react'
import style from "../styling/StudentFormStyle";


const studentSchema = {
    id: Math.floor(Math.random(1000-1)).toString(),
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
}

const AddStudentPage = () => {
    const [student, setStudent] = useState(studentSchema);

    const addStudent = () => {

        let URL = "http://localhost:5000/api/students"
        fetch(URL, {
            method: "POST",
            body: JSON.stringify(student),
            headers: {
                'content-type': 'application/json',
                "Authorization": localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
        })
    }
    return (
        <div>

        <div style={style.div}>
        <label style={style.label}>First Name</label>
        <input type="text"
        onChange={(e) => setStudent({...student, first_name: e.target.value})}
         style={style.input} 
         placeholder="First Name" />
        </div>

        <div style={style.div}>
        <label style={style.label}>Last Name</label>
        <input type="text" 
        onChange={(e) => setStudent({...student, last_name: e.target.value})}
        style={style.input} 
        placeholder="Last Name" />
        </div>

        <div style={style.div}>
        <label style={style.label}>Email</label>
        <input type="email" style={style.input}
        onChange={(e) => setStudent({...student, email: e.target.value})}
         placeholder="Please Enter your Email" />
        </div>
        
        <div style={style.div}>
        <label style={style.label}>Gender</label>
        <input type="radio" value="Male"
        onChange={(e) => setStudent({...student, gender: e.target.value})}
        
        name="gender" /> Male
        <input type="radio" value="Female" name="gender"
        onChange={(e) => setStudent({...student, gender: e.target.value})}
        /> Female
        </div>

        <div style={style.div}>
            <button style={style.button} onClick={addStudent}>Add Student</button>
        </div>

        </div>
    )
}

export default AddStudentPage;

