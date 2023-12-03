import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../features/actions/authActions";
import { FetchUserProfil, resetSession } from "../features/actions/userActions";
import { useEffect } from "react";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userName = useSelector((state) => state.user.username);
  const authToken = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logoutUser());
    dispatch(resetSession());
    console.log("User Logged out");
  };
  // Est ce que si logged in on refait un fetchUserData sur chaque page ?
  useEffect(
    function persitUser() {
      if (isAuthenticated && userName === null) {
        dispatch(FetchUserProfil(authToken));
        console.log("Header Persit");
      } else {
        return;
      }
    },
    [dispatch, isAuthenticated, userName, authToken]
  );

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="/assets/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
      </Link>
      <div className="LogInOutNav">
        {isAuthenticated ? (
          <div className="LogInOutNav">
            <Link to="/wallet" className="main-nav-item">
              {userName}'s Wallet
            </Link>
            <button className="logOut-Button" onClick={handleSignOut}>
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/login" className="main-nav-item">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
