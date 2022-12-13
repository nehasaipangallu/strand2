import React from 'react';
import './Login.css';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = { isOtpSent: false };
  }

  sendOtp = () => {
    console.log('before', this.state);
    this.setState({ isOtpSent: true });
    console.log(this.state);
  };
  render() {
    return (
      <div class="login-page d-flex justify-content-end align-items-center">
        <div class="login-page-container">
          <div class="login-background d-flex flex-column justify-content-center">
            <h3> Continue with Phone Number</h3>
            <h5>Phone Number</h5>
            <input
              type="text"
              id="typeNumber"
              class=" mobile-input form-control"
            />
            <button class="send-otp btn" onClick={this.sendOtp}>
              Send OTP
            </button>
          </div>

          <div class="otp-background d-flex flex-column justify-content-center ">
            <h3> Continue with Phone Number</h3>
            <h5>Phone Number</h5>
            <input
              type="text"
              id="typeNumber"
              class=" mobile-input form-control"
            />
            <button class="send-otp btn" onClick={this.sendOtp}>
              Send OTP
            </button>
          </div>
        </div>
      </div>
    );
  }
}
