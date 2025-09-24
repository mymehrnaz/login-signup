import React, { useState } from "react";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
            const [confirmPassword, setConfirmPassword] = useState("");
    const handleSignup = (e) =>{
        e.preventDefault();
        console.log("signup email:", email, "password:", password);
    };
    return(
<div className="container">
    <h1>
        Sign Up Form
    </h1>
    <div className="form">
<form method="get" accept-charset="utf-8" unsubmit="return submit_email()">
<lable className="lable" for="pwd">Username:</lable><br/>
<input type="text" required></input><br/>
<lable className="lable" for="emailField">E-mail:</lable><br/>
<input type="email" autoComplete="email" name="emailField" id="emailField" value="" pattern="[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,}$" required/><br/>
<lable className="lable" for="pwd">Password:</lable><br/>
<input type="password" id="pwd" name="pwd" minLength={6} autoComplete="new-password" required></input><br/>
<lable className="lable">Confirm Password:</lable><br/>
<button type="submit" className="submit" id="submit">Sign Up</button>
</form>
    </div>
    </div>
    );
};
export default Signup;