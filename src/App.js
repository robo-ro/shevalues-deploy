import React from "react";
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./HomePage/home";
// import Home from "./Home";

import JobSeekerLogin from "./JobSeekerLogin/JobSeekerLogin";
import EmployerLogin from "./EmployerLogin/EmployerLogin";
import JobSeekerSignUp from "./JobSeekerSignUp/JobSeekerSignUp";
import Registration from "./Registration/Registration.js";

// import TestLogin from "./PsychometricTest/components/Login/TestLogin";
// import PsychQuiz from "./PsychometricTest/components/Quiz/PsychQuiz";



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/jobseeker-login">
            <JobSeekerLogin />
          </Route>
          <Route path="/jobseeker-signUp">
            <JobSeekerSignUp />
          </Route>
          <Route path="/employer-login">
            <EmployerLogin />
          </Route>
          {/* <Route path="/">
            <Header />
            <Home />
            <h1>Home Page</h1>
          </Route> */}


          <Route path="/home">
            <Home />
          </Route>
         
          <Route path="/registration">
            <Registration />
          </Route>
          {/* <Route path="/pyschometricTest">
            <TestLogin />
          </Route>
          <Route path="/quiz">
            <PsychQuiz />
          </Route> */}





        </Switch>
      </div>
    </Router>
  );
}

export default App;
