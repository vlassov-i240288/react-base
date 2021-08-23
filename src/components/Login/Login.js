import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import "../HomePage/Home.css"


export const Login = () => {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="container">
            <form className="authForm" onSubmit={handleSubmit}>
                <p>Заполните форму, чтобы войти в свою учетную запись.</p>
                <div>
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        name="password"
                        onChange={handlePassChange}
                        value={password}
                        type="password"
                    />
                </div>
                <div>
                    {error && <p>{error}</p>}
                    <button type="submit">ВОЙТИ</button>
                </div>
                <hr />
                <p>
                Нет учетной записи?<Link to="/signup">ЗАРЕГИСТРИРОВАТЬСЯ</Link>
                </p>
            </form>
        </div>
    );
};