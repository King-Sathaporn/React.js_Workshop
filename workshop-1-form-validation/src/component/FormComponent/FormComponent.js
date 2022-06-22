import { useState } from "react";
import "./FormComponent.css"

const FormComponent = ()=>{

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorUsername, setErrorUsername] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const [usernameColor, setUsernameColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [passwordColor, setPasswordColor] = useState("");
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

    const validateForm = (e) =>{
        e.preventDefault();
        if(username.length>8){
            setErrorUsername("");
            setUsernameColor("green");
        }else{
            setErrorUsername("Username must contain more than 8 characters.");
            setUsernameColor("red");
        }
        if(email.includes("@")){
            setErrorEmail("");
            setEmailColor("green");
        }else{
            setErrorEmail("Invalid email address.");
            setEmailColor("red");
        }
        if(password.length>8){
            setErrorPassword("");
            setPasswordColor("green");
        }else{
            setErrorPassword("Password must contain more than 8 characters.");
            setPasswordColor("red");
        }
        if(confirmPassword !== "" && confirmPassword === password){
            setErrorConfirmPassword("");
            setConfirmPasswordColor("green");
        }else{
            setErrorConfirmPassword("Password and confirm password must match.");
            setConfirmPasswordColor("red");
        }
    }

    return(
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>Register Form</h2>
                <div className="form-control">
                    <label>username</label>
                    <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} style={{borderColor:usernameColor}}/>
                    <small style={{color:usernameColor}}>{errorUsername}</small>
                </div>
                <div className="form-control">
                    <label>E-mail</label>
                    <input type="text" placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>password</label>
                    <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>confirm password</label>
                    <input type="password" placeholder="confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} style={{borderColor:confirmPasswordColor}}/>
                    <small style={{color:confirmPasswordColor}}>{errorConfirmPassword}</small>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormComponent;