import React, { useState } from "react";

function Header({ username, isLoggedIn }) {
  return (
    <header className="headerUser">
      {isLoggedIn && (
        <>
          <h1>Welcome {username}</h1>
          <p>Signed in as {username}</p>
        </>
      )}
    </header>
  );
}

function Login() {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //only allow login with input
  const handleLogin = () => {
    if (userName.trim() !== "") {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName(""); //reset input field
  };

  const handleInputChange = (event) => {
    setUserName(event.target.value);
  };
  return (
    <div className="body">
      <Header username={userName} isLoggedIn={isLoggedIn} />
      {!isLoggedIn ? (
        <div className="userInput">
          <label className="label">Enter Username </label>
          <input
            type="text"
            value={userName}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
          <button onClick={handleLogin} disabled={userName.trim() === ""}>
            Login {/*only allows login with input*/}
          </button>
        </div>
      ) : (
        <div className="welcome">
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Login;
