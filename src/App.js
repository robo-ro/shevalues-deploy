import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./HomePage/home";
import JobSeekerSignUp from "./JobSeekerSignUp/JobSeekerSignUp";
import Policy from "./JobSeekerSignUp/Form/policy";
import Login from "./JobSeekerLogin/Login";
import Form_registration from "./Registration/Form";
import Header from "./Header/Header";

// import TestLogin from "./PsychometricTest/components/Login/TestLogin";
// import PsychQuiz from "./PsychometricTest/components/Quiz/PsychQuiz";

import FormPsych from "./PsychometricTest/components/Login/Form/FormPsych"

function App() {
  return (
    <Router>
      <div >
        <Switch>

          <Route path="/jobseeker-login">
            <Login />
          </Route>


          {/* <Route exact path="/shevalues-deploy">
            <JobSeekerSignUp />
          </Route>
          */}

          <Route exact path="/jobseeker-signup">
            <JobSeekerSignUp />
          </Route>


          <Route path="/registration">
            <Form_registration />
          </Route>


          <Route path="/shevalues-deploy">
            <Home />
          </Route>

          <Route path="/quiz-login">
            <FormPsych />
          </Route>

          {/* <Route path="/pyschometricTest">
            <TestLogin />
          </Route>
          <Route path="/quiz">
            <PsychQuiz />
          </Route> */}

          <Route path="/policy">
            <Policy />
          </Route>


          <Route path="/header">
            <Header />
          </Route>



        </Switch>
      </div>
    </Router>
  );
}

export default App;
