import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Chats from "../ChatsPage/Chats";
import { GistsList } from "../Gist/Gist";
import { Home } from "../HomePage/Home";
import { Login } from "../Login/Login";
import { Signup } from "../HomePage/Signup";
import Profile from "../ProfilePage/Profile";
import firebase from "firebase";
import "./route.css"
import PublicRoute from "../../hocs/PublicRoute";
import PrivateRoute from "../../hocs/PrivateRoute";

export default function Routes() {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        });
    }, []);

    return (
        <BrowserRouter>
            <div className="container">
                <header>
                    <ul>
                        <li>
                            <Link className="link" to="/HomePage">HOME</Link>
                        </li>

                        <li>
                            <Link className="link" to="/Profile">PROFILE</Link>
                        </li>

                        <li>
                            <Link className="link" to="/Chats">CHATS</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Gist">GISTS</Link>
                        </li>
                        <li>
                            <Link className="link" to="/signup">REGISTRATION</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Login">LOGIN</Link>
                        </li>
                    </ul>
                </header>
            </div>


            <Switch>
                <PublicRoute authenticated={authed} exact path="/HomePage">
                    <Home />
                </PublicRoute>

                <PrivateRoute authenticated={authed} path="/Profile" render={(data) => <Profile match={data.match} />}>
                </PrivateRoute>

                <PrivateRoute authenticated={authed} path="/Chats/:chatId?" component={Chats}>
                </PrivateRoute>

                <PublicRoute  path="/Gist">
                    <GistsList />
                </PublicRoute>



                <PublicRoute authenticated={authed} path="/Login">
                    <Login isSignUp />
                </PublicRoute>

                <PublicRoute authenticated={authed} path="/Signup">
                    <Signup />
                </PublicRoute>


            </Switch>

        </BrowserRouter>
    );
}

