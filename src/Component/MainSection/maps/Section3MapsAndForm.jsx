import React from "react";
import "../../../Assets/css/style.css";
import {
  SemiBold32,
  SemiBold16,
  Regular14,
} from "../../../cssComponents/fontStyling";
import mapShape from "../maps/MapShape.svg";
import call from "../maps/call.svg";
import location from "../maps/location.svg";
import msg from "../maps/mail.svg";
import "../../../Assets/css/Mainsaction.css";
import { Ccontainer } from "../../../cssComponents/LandingStyled";
function Section3MapsAndForm() {
  return (
    <div style={{ backgroundColor: "white", overflow: "hidden" }}>
      <Ccontainer className="map-head">
        <SemiBold32 className="row we">We Support Globally</SemiBold32>
        <SemiBold16 className="row pb-13 pt-1 globelSpt">
          JK Lucent has marked our global presence with offices in Dubai,
          Australia, and India.
        </SemiBold16>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6">
            <img className="mapMdia mb-5" src={mapShape} alt="MapShape" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6 ">
            <div className="row ps-2 pt-5 ps-10">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6 aus-mdia-padding">
                <div className="row" style={{ marginLeft: "-50px" }}>
                  <div className="col-1">
                    <img src={call} alt="Call" />
                  </div>
                  <div className="col pe-0">
                    <a className="a-link" href="" style={{ color: "#1C88FF" }}>
                      +61 3 9876 7487
                    </a>
                  </div>
                </div>
                <div className="row" style={{ marginLeft: "-45px" }}>
                  <div className="col-1" style={{ paddingTop: "10px" }}>
                    <img src={location} alt="Location" />
                  </div>
                  <div className="col">
                    <SemiBold16 className="pt-2">Austalia</SemiBold16>
                  </div>
                </div>

                <SemiBold16 className="pt-2">Jk Lucent</SemiBold16>
                <Regular14>81-83,Campbell St, Surry Hills, NSW 2011 </Regular14>
                <SemiBold16>Jk Lucent</SemiBold16>
                <Regular14>
                  Ground Floor 470, St Kilda Road, Melbourne, VIC 3000
                </Regular14>
              </div>
              <div className="col-6 pe-0">
                <br />
                <SemiBold16 className="pt-2">India</SemiBold16>
                <SemiBold16 className="pt-2">Jk Lucent</SemiBold16>
                <Regular14>
                  211/13, AM Road, Perumbavoor, Kerala, India 683548
                </Regular14>
                <SemiBold16>Jk Lucent</SemiBold16>
                <Regular14>
                  Leshore Business Park, Thrissur, Kerala, India 680004
                </Regular14>
              </div>
            </div>
            <div className="row" style={{ paddingLeft: "6px" }}>
              <div className="col-1 ps-5">
                <img src={msg} alt="Message" />
              </div>
              <div className="col">
                <a className="a-link" href="">
                  jklucent@mail.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </Ccontainer>
    </div>
  );
}

export default Section3MapsAndForm;
