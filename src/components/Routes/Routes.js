import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Chats from "../ChatsPage/Chats";
import { GistsList } from "../Gist/Gist";
import Profile from "../ProfilePage/Profile";
import "./route.css"

export default function Routes() {
    return (
        <BrowserRouter>

            <div className="container">
                <header>
                    <ul>
                        <li>
                            <Link className="link" to="/">HOME</Link>
                        </li>

                        <li>
                            <Link className="link" to="/Profile">PROFILE</Link>
                        </li>

                        <li>
                            <Link className="link" to="/Chats">CHATS</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Gists">GISTS</Link>
                        </li>
                    </ul>
                </header>
            </div>


            <Switch>

                <Route path="/Profile" render={(data) => <Profile match={data.match} />}>
                </Route>

                <Route path="/Chats/:chatId?" component={Chats}>
                </Route>

                <Route path="/Gists">
                    <GistsList />
                </Route>

            </Switch>

        </BrowserRouter>
    );
}

