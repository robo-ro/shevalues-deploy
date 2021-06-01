import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import JobSeekerLogin from "./JobSeekerLogin";
import EmployerLogin from "./EmployerLogin";
import JobSeekerSignUp from "./JobSeekerSignUp";



function App() {
  return (
    <Router>
      <div className="app">
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
          <Route path="/">
            <Header />
            <Home />
            <h1>Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
