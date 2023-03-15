import React from 'react';
import "../css/Signin.css";

function Signin() {
    return (
        <div className="container-fluid signinDiv d-flex align-items-center justify-content-center">
            <div className="signBox">
                <h1>Helpdesk System</h1>
                <form action="">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Username" />
                    <button className="btn">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Signin