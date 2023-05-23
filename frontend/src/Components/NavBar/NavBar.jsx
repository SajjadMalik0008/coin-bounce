import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../../store/userSlice";
import { signout } from "../../apiCall/internal";

function NavBar() {

 const isAuthenticated = useSelector((state) => state.userSlice.auth);
  const dispstch = useDispatch();

  const handleLogout = async () => {
    await signout();
    dispstch(resetUser());
  }

  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/" className={`${styles.logo} ${styles.inActiveStyle}`}>
          Coin Bounce
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Home
        </NavLink>
        <NavLink
          to="crypto"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Crypto Curriences
        </NavLink>
        <NavLink
          to="blogs"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="submit"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Submit a blog
        </NavLink>
        {isAuthenticated ? (
          <div>
            <NavLink>
              <button className={styles.signOutButton} onClick={handleLogout}>
                Sign Out
              </button>
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? styles.activeStyle : styles.inActiveStyle
              }
            >
              <button className={styles.logInButton}>Log In</button>
            </NavLink>

            <NavLink
              to="signup"
              className={({ isActive }) =>
                isActive ? styles.activeStyle : styles.inActiveStyle
              }
            >
              <button className={styles.signUpButton}>Sign Up</button>
            </NavLink>
          </div>
        )}
      </nav>
      <div className={styles.separator}></div>
    </>
  );
}

export default NavBar;
