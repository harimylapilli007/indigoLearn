import './index.css'

import {ImSmile2} from 'react-icons/im'
import {RiBookOpenLine} from 'react-icons/ri'
import {FaUserFriends} from 'react-icons/fa'
import {CgPlayButtonR} from 'react-icons/cg'
import Success from '../Success'

const BecomeACCA = () => (
  <>
    <div className="home1">
      <div className="desktop-version">
        <h1 className="heading5">Become ACCA in 18 months</h1>
        <p className="p3">
          Acquire globally recognized accountancy qualification, ACCA (also
          called as Global CA), and get placed in top MNCs & Big4s. Begin ACCA
          prep with 1FIN now.
        </p>
        <div className="card-container">
          <div className="card5">
            <div className="icon-title1">
              <ImSmile2 />
              <h1 className="text">Registered Users</h1>
            </div>
            <p className="digits">249,022</p>
          </div>
          <div className="card5">
            <div className="icon-title1">
              <RiBookOpenLine />
              <h1 className="text">Courses Enrolled</h1>
            </div>
            <p className="digits">65,171</p>
          </div>
          <div className="card5">
            <div className="icon-title1">
              <CgPlayButtonR />
              <h1 className="text">Minutes Watched</h1>
            </div>
            <p className="digits">2,090,935,459</p>
          </div>
          <div className="card5">
            <div className="icon-title1">
              <FaUserFriends />
              <h1 className="text">Faculty</h1>
            </div>
            <p className="digits">8 Experts</p>
          </div>
        </div>

        <div className="margin1">
          <button type="button" className="request-btn2">
            Download Brochure
          </button>
          <img
            className="img-d"
            alt="img"
            src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_silver_lp_logo.png"
          />
        </div>
      </div>
      <form className="form-container">
        <h1 className="home-heading">
          Aspiring to be an ACCA? Get in touch with us!
        </h1>
        <input className="input" type="text" placeholder="Phone Number*" />
        <input className="input" type="text" placeholder="Email Id" />

        <select className="input " placeholder="Current Qualification">
          <option selected value="none">
            Current Qualification
          </option>
          <option value="CA">CA</option>
          <option value="Bcom">Bcom</option>
          <option value="CS">CS</option>
          <option value="CMA">CMA</option>
          <option value="Other">Other</option>
        </select>

        <select className="input " placeholder="Interested in">
          <option selected value="none">
            Interested in
          </option>
          <option value="Level I">ACCA Level I</option>
          <option value="ACCA Level II">ACCA Level II</option>
          <option value="Level III">ACCA Level III</option>
        </select>

        <Success />
      </form>
    </div>
  </>
)
export default BecomeACCA
