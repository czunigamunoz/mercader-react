import './index.css';
import {useState} from "react";

import validations from "../../utils/validations";
import sweetAlert from "../../utils/SweetAlert";
import axios from "axios";
import Constants, {icons} from "../../config/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleInputFocus = (e) => {
        e.target.nextElementSibling.classList.add("active");
    }

    const handleInputFocusOut = (e) => {
        if (!e.target.value) e.target.nextElementSibling.classList.remove("active");
    }

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.currentTarget.id]: e.currentTarget.value
        });
    }

    const signUser = async () => {
        if (validations.empty(user.email, user.password)){
            await sweetAlert.errorAlert('All fields are required');
            return;
        }
        if (validations.email(user.email)) {
            await sweetAlert.errorAlert('Please enter a valid email address');
            return;
        }
        const response = await axios.get(`${Constants.url_user}/${user.email}/${user.password}`);
        if (response?.data?.id === null){
            await sweetAlert.errorAlert('There is no user with these credentials');
            return;
        }
        await sweetAlert.successAlert(`Welcome ${response.data.name}`);
        sessionStorage.setItem("user", JSON.stringify(response.data.id));
        if (response.data.type === "ADM") return navigate("/admin");
        if (response.data.type === "COORD") return navigate("/coordinator");
        navigate("/sales-advisor");
    }

    return (
        <section className="login__container">
            <div className="login__card box__container">
                <div className="login__logo"/>
                <h2 className="login__title">Mercader LTDA</h2>
                <form className="form__container">
                    {/* Email input */}
                    <div className="form__field">
                        <span className="svg-icon">{icons.user_login}</span>
                        <input type="email" id="email" className="form__input" value={user.email} onChange={handleInputChange} onFocus={handleInputFocus} onBlur={handleInputFocusOut}/>
                        <label className="form__label" htmlFor="loginEmail">Email</label>
                    </div>
                    {/* Password input */}
                    <div className="form__field">
                        <span className="svg-icon">{icons.lock}</span>
                        <input type="password" id="password" className="form__input" value={user.password} onChange={handleInputChange} onFocus={handleInputFocus} onBlur={handleInputFocusOut}/>
                        <label className="form__label" htmlFor="loginPassword">Password</label>
                    </div>
                    {/* Submit button */}
                    <button id="btnLogin" type="button" className="btn__login" onClick={() => signUser()}>Sing In</button>

                </form>
            </div>
        </section>
    )
}

export default Login;