import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserProvider";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "react-oauth2-code-pkce";
import { jwtDecode } from "jwt-decode";

const Connect = () => {
  const { login, idToken } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (idToken) {
      const { name, email } = jwtDecode(idToken);
      setUser({ username: name, email });
      navigate("/");
      return;
    }
    login();
  };

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
      <h1>{idToken ? "Подключено" : "Подключение"}</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Connect;
