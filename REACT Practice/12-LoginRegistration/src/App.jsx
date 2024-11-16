import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setisRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  function handleAuthentication() {
    if (isRegistered) {
      if (isRegistered) {
        const user = users.find(
          (a) => a.email === email && a.password === password
        );
        if (user) {
          setIsLoggedIn(true);
        } else {
          alert("Login Failed. Please Check your credential");
        }
      }
    } else {
      const newUser = { email, password };
      setUsers([...users, newUser]);
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsLoggedIn(true);
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  }

  return (
    <>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {email}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <form action="">
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button onClick={handleAuthentication}>
              {isRegistered ? "login" : "Register"}
            </button>
          </form>
          <p>
            {isRegistered
              ? "Dont have an Account ? Register now"
              : "Already have an Account? log in!"}
          </p>
          <button
            onClick={() => {
              setisRegistered(!isRegistered);
            }}
          >
            {isRegistered ? "Register" : "Login"}
          </button>
        </div>
      )}
    </>
  );
}

export default App;
