import { useState } from "react";
import './SignUp.css';
import signup from './images/signup.png';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const SignUp = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/users/', {
                username,
                email,
                password,
                password2: confirmPassword
            });
            alert("Signup Successful! Redirecting to login...");
            history.push('/');
        }
        catch (error) {
            console.error("Signup error:", error.response?.data);
            alert("Signup failed: " + JSON.stringify(error.response?.data));
        }
    }

    return (
        <div className="sign-up">
            <div className="nav">
                <div className="heading">
                    <h2>Sign-Up</h2>
                </div>
            </div>
            <div className="container">
                <div className="img">
                    <img src={signup} alt="Sign-up Img" />
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            required
                            placeholder="Name"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <input type="text"
                            required
                            placeholder="Username"
                            value={username}
                            onChange={(e) => { setUsername(e.target.value) }}
                        />
                        <input type="email"
                            required
                            placeholder="Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <input type="password"
                            required
                            placeholder="Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <input type="password"
                            required
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => { setConfirmPassword(e.target.value) }}
                        />

                        <button>Create Account</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default SignUp;
