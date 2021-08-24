import { Link } from "react-router-dom";

export const Home = () => (
  <>
    <h3>Home</h3>
    <div>
      <Link to="Login">ВОЙТИ</Link>
    </div>
    <div>
      <Link to="/signup">ЗАРЕГИСТРИРОВАТЬСЯ</Link>
    </div>
  </>
);

