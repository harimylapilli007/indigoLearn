import './index.css'
import {GiOpenBook} from 'react-icons/gi'

import {MdAlarmOn, MdLaptopWindows} from 'react-icons/md'

import {AiFillCalendar} from 'react-icons/ai'

const WhyChooseUs = () => (
  <>
    <div className="acca-section">
      <h1 className="cca">Why Choose Us?</h1>
      <hr />
      <div className="card-container">
        <div className="card">
          <img
            className="logo"
            src="https://www.indigolearn.com/media/images/ca_concept.png"
            alt="img"
          />
          <p className="heading"> Expert Faculty</p>
          <p className="para">
            Our Faculty are subject matter expertise with practical experience.
            They believe in #StudentFirst principle
          </p>
        </div>
        <div className="card">
          <img
            className="logo"
            src="https://www.indigolearn.com/media/images/ca_top_faculties.png"
            alt="img"
          />
          <p className="heading"> Complete Success Package</p>
          <p className="para">
            Leading Exam Prep Destination with Video classes, Live sessions,
            Doubt resolution Forums, E-notes from Kaplan, MCQs, Practice tests,
            Webinars.
          </p>
        </div>
        <div className="card">
          <img
            className="logo"
            src="https://www.indigolearn.com/media/images/ca_concept.png"
            alt="img"
          />
          <p className="heading">Placements</p>
          <p className="para">
            Resume building workshops, mock interviews and placement drives will
            help you impress the top employers and get the dream job.
          </p>
        </div>
      </div>
      {/* Desktop */}
      <div className="cards-container1">
        <div className="level-cards">
          <h1 className="level-h">Levels</h1>
          <div className="enter">
            <GiOpenBook />
            <p className="para">Three (13 papers)</p>
          </div>
        </div>
        <div className="level-cards">
          <h1 className="level-h">Duration</h1>
          <div className="enter">
            <MdAlarmOn />
            <p className="para">6-30 months</p>
          </div>
        </div>
        <div className="level-cards col-6">
          <h1 className="level-h">Exams</h1>
          <div className="enter">
            <MdLaptopWindows />
            <p className="para">Quarterly (Online)</p>
          </div>
        </div>
        <div className="level-cards col-6">
          <h1 className="level-h">Exemptions</h1>
          <div className="enter">
            <AiFillCalendar />
            <p className="para">Upto 9 papers</p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="cards-container-mobile">
        <div className="level-cards1">
          <h1 className="level-h">Levels</h1>
          <div className="enter1">
            <GiOpenBook />
            <p className="para">Three (13 papers)</p>
          </div>
        </div>
        <div className="level-cards1">
          <h1 className="level-h">Duration</h1>
          <div className="enter1">
            <MdAlarmOn />
            <p className="para">6-30 months</p>
          </div>
        </div>
      </div>
      <div className="cards-container-mobile">
        <div className="level-cards1">
          <h1 className="level-h">Exams</h1>
          <div className="enter1">
            <MdLaptopWindows />
            <p className="para">Quarterly (Online)</p>
          </div>
        </div>
        <div className="level-cards1">
          <h1 className="level-h">Exemptions</h1>
          <div className="enter1">
            <AiFillCalendar />
            <p className="para">Upto 9 papers</p>
          </div>
        </div>
      </div>
    </div>
  </>
)
export default WhyChooseUs
