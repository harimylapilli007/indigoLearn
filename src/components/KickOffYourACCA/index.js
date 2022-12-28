import './index.css'

const BecomeACCA = () => (
  <>
    <div className="home1">
      <div className="desktop-version">
        <h1 className="heading5">
          Kick off your ACCA Prep journey with IndigoLearn
        </h1>
        <p className="p3">
          Sign-in and get instant acccess to our FREE Courses
        </p>
        <img
          className="img-d"
          alt="img"
          src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_silver_lp_logo.png"
        />
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

        <div className="button-container">
          <button type="submit" className="request-btn-new">
            Request Call Back
          </button>
        </div>
      </form>
    </div>
  </>
)
export default BecomeACCA
