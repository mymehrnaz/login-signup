import React, { useState } from "react";

function PreventForm() {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!value.trim()) {
            alert("Input cannot be empty!");
        } else {
            setResult(value);
            alert("Form submitted successfully!");
        }
    };

    const handleChange = (event) => {
        setValue(event.target.value);
        setResult(""); 
    };

    return (
      <div className='container'>
        <h1>Login Form</h1>
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label className='lable' for="emailField">
                    E-mail:</label><br/>
                    <input type="email" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' value={value} onChange={handleChange} required /><br/>

                <lable className='lable' for="pwd">Password:</lable> <br/> <input type="password" minLength="6" required /><br/>

                <button type="submit" className='submit'>Login</button>
            </form>
        </div>
        </div>
    );
}

export default PreventForm;

