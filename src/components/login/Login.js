import React from 'react';
import './Login.css';
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { auth } from '../../firebase';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isOtpSent: false,
      isValidMobile: false,
      isValidOtp: false,
      mobile: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  configureCaptcha = () => {
    auth.languageCode = 'in';
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

  sendOtp = (e) => {
    e.preventDefault();
    this.configureCaptcha();
    const phoneNumber = '+91' + this.state.mobile;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    // firebase
    //   .auth()
    debugger;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        this.setState({ isOtpSent: true });
        console.log('OTP has been sent');
        // ...
      })
      .catch((error) => {
        this.setState({ isOtpSent: false });
        console.log('SMS not sent');
      });
  };

  onMobileInput = (event) => {
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
  onOTPInput = (event) => {
    if (isNaN(Number(event.target.value)) || event.target.value.length != 6) {
      this.setState({ isValidOtp: false });
    } else {
      this.setState({ isValidOtp: true });
    }
  };

  render() {
    return (
      <div class="login-page d-flex justify-content-end align-items-center">
        <div id="sign-in-button"></div>
        <div class="login-page-container">
          <div
            class="login-background flex-column justify-content-center"
            style={{
              display: !this.state.isOtpSent ? 'flex' : 'none',
            }}
          >
            <h3> Continue with Phone Number</h3>
            <h5>Phone Number</h5>
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
              Send OTP
            </button>
          </div>

          <div
            class="otp-background flex-column justify-content-center"
            style={{
              display: this.state.isOtpSent ? 'flex' : 'none',
            }}
          >
            <h4> Please enter the OTP sent to your mobile number</h4>
            <div class="otp-box-container d-flex">
              <input
                type="text"
                id="typeNumber"
                class=" otp-input form-control"
              />
              <input
                type="text"
                id="typeNumber"
                class=" otp-input form-control"
              />
              <input
                type="text"
                id="typeNumber"
                class=" otp-input form-control"
              />
              <input
                type="text"
                id="typeNumber"
                class=" otp-input form-control"
              />
              <input
                type="text"
                id="typeNumber"
                class=" otp-input form-control"
              />
              <input
                type="text"
                id="typeNumber"
                class=" otp-input form-control"
              />
            </div>
            <button
              class="send-otp btn"
              onClick={this.sendOtp}
              disabled={!this.state.isValidOtp}
            >
              Verify and Proceed
            </button>
          </div>
        </div>
      </div>
    );
  }
}
