// the 3rd content is Counter section. this is existing from the Mainsaction
import React from "react";
import "../../../Assets/css/style.css";
import CountUp from "react-countup";
import {Container,Col,Row} from "react-bootstrap";
import "../../../Assets/css/counter.css";
// import { useEffect, useState } from "react";
// import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import {
  SemiBold,
  Normal,
  NormalBold,
  Medium,
} from "../../../cssComponents/stylingComponent1";

function counterSection(props) {
  const preposition = 600;

  // const [prevPos, setPrevPos] = useState(0);
  // useEffect(() => {
  //   useScrollPosition(({ prevPos, currPos }) => {
  //     if (currPos >= preposition) {
  //       console.log("printing...");
  //     }
  //   });
  // }, [currPos]);

  return (
    <Container className="pt-12 pb-10 ps-12">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-4">
          <div className="row counter-Head">
            {/* Count_1 */}
            <Medium>
              <CountUp start={0} end={230} duration={1.5} />
            </Medium>

            <div className="temp-12"></div>
          </div>

          <div className="row counter-para">
            {/* Para */}
            <p>Clients</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-4">
          <div className="row counter-Head">
            {/* Count_2 */}
            <Medium>
              <CountUp start={0} end={34} duration={1.5} />
            </Medium>
            <div className="temp-12"></div>
          </div>

          <div className="row counter-para">Developers</div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-4">
          <div className="row counter-Head">
            {/* Count_3 */}
            <Medium>
              <CountUp start={0} end={3} duration={1.5} />
            </Medium>
            <div className="temp-12"></div>
          </div>
          <div className="row counter-para">
            <p>Continents</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-4">
          <div className="row counter-Head">
            {/* Count_4 */}
            <Medium>
              <CountUp start={0} end={250} duration={1.5} />
            </Medium>
            <div className="temp-12"></div>
          </div>

          <div className="row counter-para">
            <p>Cups of Tea</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default counterSection;
