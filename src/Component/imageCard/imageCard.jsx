import React from "react";
import "../../Assets/css/imagecard.css";
import madam from "../../Component/imageCard/madam.svg";
import sir from "../../Component/imageCard/sir.svg";
import Linkdin from "../../Component/imageCard/in.svg";
import fb from "../../Component/imageCard/fb.svg";
import twit from "../../Component/imageCard/twit.svg";
import svgss from "../../Component/imageCard/filterBlack.svg";
import { Container, Row, Col } from "react-bootstrap";

function imageCard() {
  return (
    <>
      <Container className="">
        <Row>
          <div className="semi32-1">Meet Our Team Of Experts</div>
          <Col xl={6} lg={6}>
            <div className="cardss">
              <div className="picture shereen">
                <img src={madam} alt="madam" />
              </div>
              <div className="downCard">
                <div className="semiBold24">SHEREEN CHACKO</div>
                <div className="regular14">CEO & Founder Of JKLUCENT</div>
                <div className="svgs">
                  <img className="ioconss" src={fb} alt="fb" />
                  <img className="ioconss" src={Linkdin} alt="linkdin" />
                  <img className="ioconss" src={twit} alt="twiter" />
                </div>
              </div>
              <div className="backcolor">
                <div className="para11">
                  Versatile professional with more than 20 years of experience
                  managing large-scale projects. She has led cross-functional
                  teams with focus on complex technology aspects building
                  business values, development and delivery efficiencies, using
                  agile system design, development and delivery methodology.
                  Shereen has a proven track record of implementing web and
                  cloud development projects in the most competitive
                  environments with the ability to break down barriers and
                  provide leadership to teams at time of need.
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="cardss">
              <div className="picture eldo">
                <img src={sir} alt="sir" />
              </div>
              <div className="downCard">
                <div className="semiBold24">ELDO CHACKO</div>
                <div className="regular14">COO & Founder Of JKLUCENT</div>
                <div className="svgs">
                  <img className="ioconss" src={fb} alt="fb" />
                  <img className="ioconss" src={Linkdin} alt="linkdin" />
                  <img className="ioconss" src={twit} alt="twiter" />
                </div>
              </div>
              <div className="backcolor">
                <div className="para11">
                  Versatile professional with more than 20 years of experience
                  managing large-scale projects. She has led cross-functional
                  teams with focus on complex technology aspects building
                  business values, development and delivery efficiencies, using
                  agile system design, development and delivery methodology.
                  Shereen has a proven track record of implementing web and
                  cloud development projects in the most competitive
                  environments with the ability to break down barriers and
                  provide leadership to teams at time of need.
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default imageCard;
