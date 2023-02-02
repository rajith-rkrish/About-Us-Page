import IcomoonReact from "icomoon-react";
import Newsletter from "./Newsletter";
import iconSet from "../../Assets/json/selection.json";
import logo1 from "../Footer/jkLucent.svg";
import "../../Assets/css/style.css";
import {
  Linked,
  Fbook,
  Tweet,
  Utube,
  Whtsp,
} from "../../cssComponents/IconStyled";
import {
  Nave,
  Seperater,
} from "../../cssComponents/CardStyled";
import {
  B7,
  B5,
  Ahvr,
  Ahvr1,
} from "../../cssComponents/FontsStyled";

function FooterTop() {
  return (
    <>
      <div className="container pb-3 pb-md-3 pt-11">
        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-4">
            <div className="d-flex flex-row pb-3">
              <div>
                <a href="/">
                  <img src={logo1} width={170} height={30} alt="logo" />
                </a>
              </div>
            </div>
            {/* ./logo */}
            <div className="undrlines mb-2"></div>
            <div className="d-flex flex-row pb-3">
              <Nave>
                <div className="col mx-auto my-auto">
                  <a href="https://wa.me/+61398767487">
                    <Whtsp />
                  </a>
                </div>
                <div className="col mx-auto my-auto">
                  <a href="https://www.facebook.com/jklucent">
                    <Fbook />
                  </a>
                </div>
                <div className="col mx-auto my-auto">
                  <a href="https://twitter.com/JKLucent_">
                    <Tweet />
                  </a>
                </div>
                <div className="col mx-auto my-auto">
                  <a href="https://www.youtube.com/channel/UCYTfKw_xw-XZcD6MqKOZ56Q/featured">
                    <Utube />
                  </a>
                </div>
                <div className="col mx-auto my-auto">
                  <a href="https://www.linkedin.com/company/jklucent/">
                    <Linked />
                  </a>
                </div>
              </Nave>
            </div>
            {/* ./social */}
            <div className="d-flex flex-row pb-3">
              <div className="col-1">
                <IcomoonReact
                  iconSet={iconSet}
                  color="rgba(252, 252, 252,0.6)"
                  size={"24px"}
                  icon="location"
                />
              </div>
              <B7 className="col d-flex ps-2 pt-1">
                <Seperater className="col-3" style={{ fontSize: "16px" }}>
                  <a href="/" className="text-white">
                    Australia
                  </a>
                </Seperater>
                <div className="col-3 ps-3" style={{ fontSize: "16px" }}>
                  <a href="/" className="text-white">
                    India
                  </a>
                </div>
              </B7>
            </div>
            {/* ./Address */}
            <div className="d-flex flex-row">
              <div className="col-1">
                <IcomoonReact
                  iconSet={iconSet}
                  color="rgba(252, 252, 252,0.6)"
                  size={"24px"}
                  icon="call"
                />
              </div>
              <B7 className="col pt-1 ps-2 pt-1">
                <p>
                  <a style={{ color: "white" }} href="tel:+61398767487">
                    +61 3 9876 7487
                  </a>
                </p>
                <p>
                  <a style={{ color: "white" }} href="tel:+914872082188">
                    +91 487 2082188
                  </a>
                </p>
              </B7>
            </div>
            {/* Phone */}
          </div>
          {/* ./column 1 */}
          <div className="col-md-4 col-lg-4">
            <div>
              <B5 className="widget-title text-white mb-3">Company</B5>
              <div className="undrlines mb-2"></div>
              <ul className="list-unstyled mb-0">
                <li className="pb-3">
                  <Ahvr>
                    <a href="/">About Us </a>
                  </Ahvr>
                </li>
                <li className="pb-3">
                  <Ahvr>
                    <a href="/">Services </a>
                  </Ahvr>
                </li>
                <li className="pb-3">
                  <Ahvr>
                    <a href="/">Careers </a>
                  </Ahvr>
                </li>
                <li className="pb-3">
                  <Ahvr>
                    <a href="/">Contact Us</a>
                  </Ahvr>
                </li>
              </ul>
            </div>
          </div>
          {/* ./column 2 */}
          <div className="col-md-4 col-lg-4">
            <B5 className="widget-title text-white mb-3">Newsletter</B5>
            <div className="undrlines mb-2"></div>
            <Ahvr1 style={{ color: "#b7c4cf" }} className="mb-5">
              “If you want to grow you have to do something different from the
              majority of people.”
            </Ahvr1>
            <div className="newsleter-wrapper mb-5">
              {/* Begin Mailchimp Signup Form */}
              <div>
                <Newsletter />
              </div>
            </div>
          </div>
          {/* ./column 3 */}
        </div>
      </div>
    </>
  );
}

export default FooterTop;
