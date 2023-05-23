import { useState } from "react";
import styles from "./login.module.css";
import Textinput from "../../Components/TesxtInput/TextInput";
import loginSchema from "../../schemas/loginSchema";
import {useFormik} from "formik";
import { login } from "../../apiCall/internal";
import {setUser} from "../../store/userSlice";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";


function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState();

    const handleLogin = async() => {
        const data = {
            username: values.username,
            password: values.password,
          };
        const response  = await login(data);
        if (response.status === 200) {
            // 1. set user
            const user = {
                _id: response.data.user._id,
                username: response.data.user.username,
                email: response.data.user.email,
                auth: response.data.auth
            };
            dispatch(setUser(user));
            navigate('/');
            // 1. reditect -> home page
        } else if (response.code === 'ERR_BAD_REQUEST'){
            console.log(`responce is  ${error}`);
            setError(response.response.data.message);
        }
    };


    const { values, touched, handleBlur, handleChange, errors } = useFormik({
        initialValues: {
          username: "",
          password: "",
        },
    
        validationSchema: loginSchema,
      });

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginHeader}>
                Login to your account 
            </div>
            <Textinput 
            type="text"
            value={values.username} 
            name="username"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="username"
            error={errors.username && touched.username ? 1 : undefined} 
            errormessage={errors.username} 
            />
            <Textinput
            type="password"
            value={values.password} 
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="password"
            error={errors.password && touched.password ? 1 : undefined} 
            errormessage={errors.password} 
            />
            <button className={styles.logInButton} 
            onClick = {handleLogin}
            disabled={
                !values.username || 
                !values.password ||
                !values.confirmPassword ||
                !values.name ||
                !values.email || 
                errors.username || 
                errors.password ||
                errors.confirmPassword ||
                errors.name ||
                errors.email  }
            >Log in</button>
            <span>Don't have an account? <button className={styles.createAccount} onClick={() =>    navigate('/signup')}>Register</button></span>
            {error !== "" ? <p className={styles.errorMessage}>{error}</p> : ""}
        </div>
    )
}

export default Login;