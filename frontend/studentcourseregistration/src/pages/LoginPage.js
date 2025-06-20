import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import { storeLogin } from '../store/AuthSlice';
import { useDispatch } from 'react-redux';


const LoginPage = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const 

    const initiateLogin = () => {
        let URL = "http://localhost:5000/api/users/login"
        fetch(URL, {
            method: 'POST', 
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
         })
         .then(res => res.json())
         .then(res => {
            if(res.isLoggedIn){
                localStorage.setItem('token',res.token)
                dispatch(storeLogin(true));
                navigate("/students")
            }else {
                alert("invalid credentials")
            }
         })
    }

    return (
        <div>

            <div>
                <label>Email</label>
                <input type="email"
                onChange={(e) => setUser({...user,email: e.target.value})}
                placeholder="Please enter your email" />
            </div>

            <div>
                <label>Password</label>
                <input type="password"
                onChange={(e) => setUser({...user,password: e.target.value})}
                placeholder="Please enter your password" />
            </div>

            <div>
                <button onClick={() => initiateLogin()}>Login</button>
            </div>
            
        </div>
    )
}

export default LoginPage;