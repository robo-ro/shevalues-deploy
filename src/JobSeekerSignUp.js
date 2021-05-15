import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      isVerified: false
    }
  }

  recaptchaLoaded() {
    console.log('capcha successfully loaded');
  }

  handleSubscribe() {
    if (this.state.isVerified) {
      alert('You have successfully signed up for the site!');
    } else {
      alert('Please verify that you are a human!');
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title"> JobSeekerSignUp </h1>
        </header>
        <div className="App-intro">
          <input type="text" placeholder="email@company.com" />

          <div
            className="convert"
            onClick={this.handleSubscribe}
          >Sign Up</div>

          <Recaptcha
            sitekey="6LfZv9IaAAAAAGX52GDEFHzoudrLvNPSvlmGh1Hv"
           
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />
        </div>
      </div>
    );
  }
}

export default App;