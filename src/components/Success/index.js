import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

const Success = () => (
  <div className="success-container">
    <Popup
      modal
      trigger={
        <div className="button-container">
          <button type="button" className="request-btn-new">
            Request Call Back
          </button>
        </div>
      }
    >
      <form className="form-container4">
        <div className="success">
          <img
            className="final-image"
            src="https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711429.jpg"
            alt="success"
          />
        </div>
      </form>
    </Popup>
  </div>
)
export default Success
