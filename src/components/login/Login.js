import React from 'react';
import './Login.css';
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { auth } from '../../firebase';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isOtpSent: false,
      isValidMobile: false,
      isValidOtp: false,
      mobile: '',
      digit1: '',
      digit2: '',
      digit3: '',
      digit4: '',
      digit5: '',
      digit6: '',
      otp: [],
      isValid: true,
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

  onMobileInput = (event) => {
  

    if (event.target.value[0] != 8) {
     
      this.setState({ isValid: false });
      return;
    }
   this.setState({isValid: true});
   
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
        console.log('User is verified');
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        console.log(error)
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
              {/* <Spinner animation="border" size="sm" /> */}
              Send OTP
            </button>
            <Alert
              key="danger"
              variant="danger"
              style={{ display: this.state.isValid ? 'none' : 'block' }}
            >
              This is a danger alert—check it out!
            </Alert>
          </div>

          <div
            class="otp-background flex-column justify-content-center"
            style={{
              display: this.state.isOtpSent ? 'flex' : 'none',
            }}
          >
            <h4> Please enter the OTP sent to your mobile number</h4>
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
          </div>
        </div>
      </div>
    );
  }
}
