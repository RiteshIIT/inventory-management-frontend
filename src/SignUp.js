import { useState } from "react";
import './SignUp.css'

const SignUp = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="sign-up">
            <h2>Sign-Up</h2>
            <form>
                <input type="text"
                    required
                    placeholder="Name"
                    value = {name}
                    onChange={(e) => {setName(e.target.value)}}
                />
                <input type="text"
                    required
                    placeholder="Username"
                    value = {username}
                    onChange={(e) => {setUsername(e.target.value)}}
                />
                <input type="text"
                    required
                    placeholder="Password"
                    value = {password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <input type="text"
                    required
                    placeholder="Confirm Password"
                    value = {confirmPassword}
                    onChange={(e) => {setConfirmPassword(e.target.value)}}
                />
                <input type="text"
                    required
                    placeholder="Email"
                    value = {email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />

                <button>Create Account</button>

            </form>
        </div> 
     );
}
 
export default SignUp;
