import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {FcGoogle} from 'react-icons/fc'
import {HiUserCircle} from 'react-icons/hi'

import './index.css'

const Button = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <div className="sign-container">
          <HiUserCircle className="login-icon" />
          Login/Signup
        </div>
      }
    >
      <form className="form-container4">
        <p className="home-heading">Sign in to your IndigoLearn account</p>
        <div className="google-container">
          <FcGoogle className="g-icon" />
          Sign to Google
        </div>
        <div className="or">
          <hr className="line" />
          <p className="home-heading">or</p>
          <hr className="line" />
        </div>
        <p className="home-heading">
          Already have an account? Sign in using phone
        </p>
        <input
          className="input1"
          type="text"
          placeholder="+91 Enter Phone Number"
        />
        <div className="div1">
          <button type="button" className="bt-1">
            Get OTP on SMS
          </button>
        </div>
        <div className="div1">
          <input type="checkbox" />
          <p className="p13">I accept T&C and Privacy_Policy</p>
        </div>
      </form>
    </Popup>
  </div>
)
export default Button
