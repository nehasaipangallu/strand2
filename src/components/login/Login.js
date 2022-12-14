import React, { useState } from 'react';
import './Login.css';
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { auth } from '../../firebase';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { withRouter } from 'react-router';
import { Navigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

class Login extends React.Component {
  //  navigate = useNavigate();
  // changed
  interval;
  constructor(props) {
    super(props);
    this.interval = function () {};
    this.state = {
      isOtpSent: false,
      isValidMobile: false,
      isValidOtp: false,
      isOtpTimerCompleted: false,
      mobile: '',
      digit1: '',
      digit2: '',
      digit3: '',
      digit4: '',
      digit5: '',
      digit6: '',
      otp: [],
      isValid: true,
      minutes: 1,
      seconds: 25,
      onLogInCbk: props.onLogInCbk,
    };
    props.onLoad(false);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  configureCaptcha = () => {
    auth.languageCode = 'en';
    window.recaptchaVerifier = new RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          //this.onSignInSubmit();
          // console.log('recaptcha verified');
        },
      },
      auth
    );
  };

  onMobileInput = (event) => {
    if (event.target.value[0] != 8) {
      this.setState({ isValid: false });
      return;
    }
    this.setState({ isValid: true });

    if (isNaN(Number(event.target.value)) || event.target.value.length != 10) {
      this.setState({ isValidMobile: false });
    } else {
      this.setState({ isValidMobile: true });
    }

    if (!isNaN(Number(event.target.value)) && event.target.value) {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    }
  };

  sendOtp = (e) => {
    e.preventDefault();
    this.configureCaptcha();
    const phoneNumber = '+91' + this.state.mobile;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        window.confirmationResult = confirmationResult;
        this.setState({ isOtpSent: true });
        this.countdown();
        console.log('OTP has been sent');
        // ...
      })
      .catch((error) => {
        this.setState({ isOtpSent: false });
        console.log('SMS not sent');
      });
  };

  onOTPInput = (event) => {
    if (isNaN(Number(event.target.value))) {
      this.setState({ isValidOtp: false });
      return;
    } else {
      const { name, value, id } = event.target;
      this.setState({
        [name]: value,
      });

      const otp = this.state.otp;
      otp[id] = value;

      this.setState({
        otp: otp,
      });
      if (otp.join('').trim().length === 6) {
        this.setState({ isValidOtp: true });
      }
    }
  };

  verifyOtp = (event) => {
    event.preventDefault();
    const code = this.state.otp.join('');
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        window.localStorage.setItem('isLoggedin', 'true');
        this.state.onLogInCbk();
        this.setState({
          isValidUser: true,
        });
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        this.setState({
          isValidUser: false,
        });
        console.log(error);
      });
  };

  inputfocus = (elmnt) => {
    if (elmnt.key === 'Delete' || elmnt.key === 'Backspace') {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log('next');
      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      } else if (next == 6) {
        // document.getElementsByClassName('verify-otp')[0].focus();
      }
    }
  };

  countdown = () => {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setState({ seconds: this.state.seconds - 1 });
      if (this.state.seconds - 1 < 0 && this.state.minutes == 0) {
        return;
      } else if (this.state.seconds - 1 < 0 && this.state.minutes > 0) {
        this.setState({
          minutes: 0,
          seconds: 59,
        });
      }
      if (this.state.minutes == 0 && this.state.seconds - 1 <= 0) {
        this.setState({ isOtpTimerCompleted: true });
        clearInterval(this.interval);
      }
    }, 1000);
  };

  resendOtp = (e) => {
    this.setState({ isOtpTimerCompleted: false, minutes: 1, seconds: 30 });
    this.sendOtp(e);
  };

  render() {
    return (
      <div class="container-fluid p-0 py-0">
        <div class="login-page d-flex justify-content-end align-items-center">
          <div id="sign-in-button"></div>
          <div class="login-page-container">
            {/* Mobile number */}
            <div
              class="login-background flex-column justify-content-center"
              style={{
                display: !this.state.isOtpSent ? 'flex' : 'none',
              }}
            >
              
              <h3 className="heading-log"> Continue with Phone Number</h3>
              {/* <h5 className="heading-log-2">Phone Number</h5> */}
              <div class="mobile-input-container  form-control">
                <p class="country-code">+91</p>
                <input
                  type="text"
                  id="mobile"
                  class="mobile-input"
                  name="mobile"
                  required
                  onChange={this.onMobileInput}
                />
              </div>
              <button
                class="send-otp btn"
                disabled={!this.state.isValidMobile}
                onClick={this.sendOtp}
              >
                {/* <Spinner animation="border" size="sm" /> */}
                Send OTP
              </button>
              <Alert
                key="danger"
                variant="danger"
                style={{ display: this.state.isValid ? 'none' : 'block' }}
                className="alert-box"
              >
                Phone number is not Valid
              </Alert>
            </div>
            
            {/* OTP */}
            <div
              class="otp-background flex-column justify-content-center"
              style={{
                display: this.state.isOtpSent ? 'flex' : 'none',
              }}
            >
              <h4 className= "otp-heading"> Please enter the OTP sent to your mobile number</h4>
              <form class="otp-box-container d-flex">
                <input
                  type="text"
                  id="0"
                  name="digit1"
                  class="otp-input form-control"
                  onChange={this.onOTPInput}
                  onKeyPress={this.keyPressed}
                  // onChange={(e) => this.handleChange('digit1', e)}
                  tabIndex="1"
                  maxLength="1"
                  onKeyUp={(e) => this.inputfocus(e)}
                />
                <input
                  type="text"
                  id="1"
                  name="digit2"
                  class=" otp-input form-control"
                  onChange={this.onOTPInput}
                  onKeyPress={this.keyPressed}
                  // onChange={(e) => this.handleChange('digit2', e)}
                  tabIndex="2"
                  maxLength="1"
                  onKeyUp={(e) => this.inputfocus(e)}
                />
                <input
                  type="text"
                  id="2"
                  name="digit3"
                  class=" otp-input form-control"
                  onChange={this.onOTPInput}
                  onKeyPress={this.keyPressed}
                  // onChange={(e) => this.handleChange('digit3', e)}
                  tabIndex="3"
                  maxLength="1"
                  onKeyUp={(e) => this.inputfocus(e)}
                />
                <input
                  type="text"
                  id="3"
                  class=" otp-input form-control"
                  name="digit4"
                  onChange={this.onOTPInput}
                  onKeyPress={this.keyPressed}
                  // onChange={(e) => this.handleChange('digit4', e)}
                  tabIndex="4"
                  maxLength="1"
                  onKeyUp={(e) => this.inputfocus(e)}
                />
                <input
                  type="text"
                  id="4"
                  name="digit5"
                  class=" otp-input form-control"
                  onChange={this.onOTPInput}
                  onKeyPress={this.keyPressed}
                  // onChange={(e) => this.handleChange('digit5', e)}
                  tabIndex="5"
                  maxLength="1"
                  onKeyUp={(e) => this.inputfocus(e)}
                />
                <input
                  type="text"
                  id="5"
                  name="digit6"
                  class=" otp-input form-control"
                  onChange={this.onOTPInput}
                  onKeyPress={this.keyPressed}
                  // onChange={(e) => this.handleChange('digit6', e)}
                  tabIndex="6"
                  maxLength="1"
                  onKeyUp={(e) => this.inputfocus(e)}
                />
              </form>

              <button
                class="verify-otp btn"
                onClick={this.verifyOtp}
                disabled={!this.state.isValidOtp}
              >
                Verify and Proceed
              </button>
              <div className="d-flex justify-content-between">
                <button
                  class="resend-otp-btn"
                  onClick={this.resendOtp}
                  style={{
                    visibility: this.state.isOtpTimerCompleted
                      ? 'visible'
                      : 'hidden',
                  }}
                >
                  Resend OTP
                </button>
                <p class="countdown-text">
                  Time Remaining: {this.state.minutes}:{this.state.seconds}
                </p>
              </div>

              <Alert
                key="danger"
                variant="danger"
                className="otp-alert"
                style={{
                  display:
                    this.state.isValidUser && this.state.isOtpSent
                      ? 'block'
                      : 'none',
                }}
              >
                {' '}
                Otp is Not Valid{' '}
              </Alert>
              {this.state.isValidUser && <Navigate to="/user" replace={true} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
