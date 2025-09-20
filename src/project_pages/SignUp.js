
import './Login_CSS.css';
import './media_queries.css';
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Loading from "../Components/Loading";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import { shopping_mart_logo } from "../image_st_file";


function Signup() {

    const [email, set_email] = useState('');
    const [password, set_password] = useState('');
    const [loading, set_loading] = useState(false);
    const navigate = useNavigate();

    const Aunthentication = async () => {
        const auth = getAuth(app);
        set_loading(true)
        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Signup Successfully");
                console.log("done");
                localStorage.setItem('email', email);
                navigate('/landing_page', { replace: true });
            })
            .catch((error) => {
                alert("something went wrong");
                console.log("not done",error);
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

                <h1>Signup</h1>

                <input className="input-feilds" onChange={(e) => {
                    set_email(e.target.value);
                }} type="email" placeholder="Email" />

                <input className="input-feilds" onChange={(e) => {
                    set_password(e.target.value);
                }} type="password" placeholder="Password" />
                

                <div className="login-button-div">
                    <button id="signup-button" className="input-button" onClick={() => {
                        if(password.length >= 6){
                            Aunthentication()}
                    else{alert("Minimum 6 characters required in password...")}
                    }}>
                        Signup
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup;