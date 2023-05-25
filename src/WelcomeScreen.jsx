import React from "react";

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
    (
        <div className="WelcomeScreen fixed w-full top-0 min-h-screen flex items-center text-center flex-col py-10 gap-6 bg-orange-50">
            <img
            className="meetupLogo"
            src="../public/google900557fa0093f4ee.html"
            alt="app Logo"/>
            
            <h1 className="text-3xl sm:text-4xl text-purple-500 mt-36">Welcome to the MeetUp app</h1>
            <h4 className="text-2xl sm:text-2xl">This is an app to see upcoming events around the world for full-stack developers. Because the app uses an external google calendar to show the events, google insists on verifying all users for security reasons. This seems worrying but I assure you the app does not read or write your data in any way. </h4>
            <div className="button_cont">
                    <button onClick={() => { props.getAccessToken() }}
                        rel="nofollow noopener"
                        className="btn flex items-center justify-center"
                    >
                        <img
                        className="google-icon w-9 p-2"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="Google sign-in"
                        />
                        <b>Sign in with google</b>
                    </button>
            </div>
            <a href="https://lts-hmms.github.io/meetup/privacy.html" rel="nofollow noopener">
                Privacy policy
            </a>
        </div>
    ) 
    : null
}

export default WelcomeScreen;