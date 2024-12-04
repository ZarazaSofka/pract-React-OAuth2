import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Connect from "./pages/Connect";
import { AuthProvider } from "react-oauth2-code-pkce";
import { UserProvider } from "./pages/UserProvider";
import { authConfig } from "./auth.config";

function App() {
  return (
    <div id="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Auth />} />
            <Route
              path="/connect"
              element={
                <AuthProvider authConfig={authConfig}>
                  <Connect />
                </AuthProvider>
              }
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
