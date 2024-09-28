import React from 'react';
import './SigninSignup.css';

const SignInSignUp = () => {
    return (
        <div className="signin-signup-container">
            <div className="form-container">
                <h1>Welcome Back!</h1>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignInSignUp;
