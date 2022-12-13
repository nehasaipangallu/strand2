import React from 'react';
import './Login.css';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = { isOtpSent: false, isValidMobile: false, isValidOtp: false };
  }

  onMobileInput = (event) => {
    if (isNaN(Number(event.target.value)) || event.target.value.length != 10) {
      this.setState({ isValidMobile: false });
    } else {
      this.setState({ isValidMobile: true });
    }
  };
  onOTPInput = (event) => {
    if (isNaN(Number(event.target.value)) || event.target.value.length != 6) {
      this.setState({ isValidOtp: false });
    } else {
      this.setState({ isValidOtp: true });
    }
  };
  sendOtp = () => {
    console.log('before', this.state);
    this.setState({ isOtpSent: true });
    console.log(this.state);
  };
  render() {
    return (
      <div class="login-page d-flex justify-content-end align-items-center">
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
