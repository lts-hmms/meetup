import React from "react";
import './WelcomeScreen.css';

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
    (
        <div className="WelcomeScreen fixed w-full top-0 min-h-screen flex items-center text-center flex-col py-10 gap-6 bg-orange-50">
            <h1 className="text-3xl sm:text-4xl text-purple-500 mt-36">Welcome to the MeetUp app</h1>
            <h4 className="text-2xl sm:text-2xl">Log in to see upcoming events around the world for full-stack developers</h4>
            <div className="button_cont" align="center">
                <div className="google-btn">
                    <div className="google-icon-wrapper">
                        <img
                            className="google-icon w-6"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="Google sign-in"
                            />
                    </div>
                    <button onClick={() => { props.getAccessToken() }}
                            rel="nofollow noopener"
                            className="btn-text"
                    >
                        <b>Sign in with google</b>
                    </button>
                </div>
            </div>
            <a href="https://lts-hmms.github.io/meetup/privacy.html" rel="nofollow noopener">
                Privacy policy
            </a>
        </div>
    ) 
    : null
}

export default WelcomeScreen;