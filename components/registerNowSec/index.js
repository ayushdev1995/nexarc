// styles
import "./styles.scss"

import PrimaryButton from "../button";
import TataEnterpriseText from "../tataEnterpriseText";

function RegisterNowSec({ heading }) {
  return (
    <>
      <div className="register-now--sec">
        <div className="container-fluid custom">
          <div className="content-box">
            <TataEnterpriseText />
            <div className="heading text-white">{heading}</div>
            <PrimaryButton
              className="register-btn primary"
              buttonName="Register Now"
              btnRightIcon="../../static/assets/images/icons/icon-rt-arrow-white.svg"
            />
          </div>
          <div className="image-box">
            {/* <img className="arc absolute" src={arc} alt="arc" /> */}
            <img className="user absolute" src="../../static/assets/images/man-with-arc.png" alt="user" width="624" height="100%" />
            {/* <img className="cornerArc absolute" src={cornerArc} alt="cornerArc" /> */}
          </div>
        </div>
      </div>
    </>
  )
}
export default RegisterNowSec;