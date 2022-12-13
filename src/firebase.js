import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
var firebaseConfig = {
  apiKey: 'AIzaSyBBjqYGJg2puZeEJoqK6i-4xU7DnO95JjA',
  authDomain: 'otp-login-compo.firebaseapp.com',
  projectId: 'otp-login-compo',
  storageBucket: 'otp-login-compo.appspot.com',
  messagingSenderId: '634787177618',
  appId: '1:634787177618:web:1fa925f21b7a0f1298f24b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
