import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/actions/authActions";

function LoginForm() {
  const [email, setEmail] = useState("tony@stark.com");
  const [password, setPassword] = useState("password123");
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  /* const authToken = useSelector((state) => state.auth.token); */

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    dispatch(loginUser({ email, password }));
    console.log("SignIn request .. ");
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Redirected");
      navigate("/wallet");
    }
  }, [isAuthenticated, navigate]);

  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={handleRememberMeChange}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="button" className="sign-in-button" onClick={handleSignIn}>
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;

/* 

const [rememberMe, setRememberMe] = useState(false);

const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

<div className="input-remember">
<input
  type="checkbox"
  id="remember-me"
  checked={rememberMe}
  onChange={handleRememberMeChange}
/>
<label htmlFor="remember-me">Remember me</label>
</div> */

/* useEffect(() => {
    console.log(authToken);
    if (isAuthenticated) {
      dispatch(FetchUserProfil(authToken));
      console.log("user Retrived from login action");
      console.log("Redirected");
      navigate("/wallet");
    }
  }, [isAuthenticated, authToken, dispatch, navigate]);
 */
/*  useEffect(() => {
      if (isAuthenticated) {
      navigate("/wallet");
    }
    console.log("Redirected");
    dispatch(FetchUserProfil());
  }, [isAuthenticated, dispatch]);
 */

/*   const handleRetrieve = () => {
    dispatch(FetchUserProfil());
    console.log("Retrieving request .. ");
  }; */

/* <button type="button" className="sign-in-button" onClick={handleRetrieve}>
        RetrieveTest
      </button> */
