import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserProvider";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.username || user.username == "") {
      navigate("/login");
    }
  });

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <h1>Добро пожаловать, {user.username}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Home;
