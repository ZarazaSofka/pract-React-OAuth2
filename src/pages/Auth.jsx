import React, { useState, useContext } from "react";
import { UserContext } from "./UserProvider";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [useThirdParty, setUseThirdParty] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (useThirdParty) {
      navigate("/connect");
    } else {
      setUser({ username, email });
      navigate("/");
    }
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
      <h1>Вход</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required={!useThirdParty}
            disabled={useThirdParty}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={!useThirdParty}
            disabled={useThirdParty}
          />
        </label>
        <br />
        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={!useThirdParty}
            disabled={useThirdParty}
          />
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={useThirdParty}
            onChange={() => setUseThirdParty(!useThirdParty)}
          />
          Использовать стороннее что-то
        </label>
        <br />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Auth;
