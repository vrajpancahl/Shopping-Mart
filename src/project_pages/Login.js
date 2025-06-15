import "./Login_CSS.css";
import './media_queries.css';
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import { shopping_mart_logo } from "../image_st_file";


function Login() {
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [loading, set_loading] = useState(false);
  const navigate = useNavigate();

  const goToSignupPage = () => {
    window.open('/signup_page', "_blank");
  };

  const Aunthentication = async () => {
    const auth = getAuth();
    set_loading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("logged in successfully");
        console.log("done");
        localStorage.setItem("email", email)
        navigate('/landing_page', { replace: true });

      })
      .catch((error) => {
        alert("something went wrong");
        console.log("not done");
      });
    set_loading(false)
  }


  return (
    <div className="main-container">
      {(loading == true) ? <Loading /> : ""}
      <div className="website-logo-div">
        <img src={shopping_mart_logo} alt="" />
      </div>
      <div className="login-container">
        <h1>Login</h1>
        <input
          className="input-feilds"
          onChange={(e) => {
            set_email(e.target.value);
          }}
          type="email"
          placeholder="Email"
        />
        <input
          className="input-feilds"
          onChange={(e) => {
            set_password(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />
        <div className="login-button-div">
          <button
            id="login-button"
            className="input-button"
            onClick={() => {
              Aunthentication();
            }}
          >
            Login
          </button>
          <button
            id="signup-button"
            className="input-button"
            onClick={() => { goToSignupPage() }}
          >
            Go Signup page
          </button>

        </div>
      </div>
    </div>
  );
}

export default Login;
