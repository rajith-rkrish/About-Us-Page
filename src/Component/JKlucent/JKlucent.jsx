import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import office from "../JKlucent/officeMeet.svg";
import { B32 } from "../../cssComponents/fontsStylings";
import { Regular14 } from "../../cssComponents/fontStyling";
import fb from "../JKlucent/fb1.svg";
import twit from "../JKlucent/twit1.svg";
import link from "../JKlucent/in-01.svg";
import "../../Assets/css/jk.css";
function JKlucent() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <img className="office" src={office} alt="office" />
            </div>
          </Col>
          <Col className="marL">
            <B32 className="jklu">JK LUCENT</B32>
            <Regular14 className="jk">
              JK Lucent is a software engineering company specialized in
              delivering  software engineering services to our customers
              utilizing the benefits of AGILE development standards.
              <br />
              <br /> We are an Oracle NetSuite Alliance partner delivering
              complete NetSuite cloud computing services from customization and
              consulting to implementation and support on NetSuite for customers
              in various verticals . Our passion, customer centric and
              technology oriented approach has enabled B2B and B2C brands
              translate their needs into technology efficient and scalable
              systems.{" "}
            </Regular14>
            <div style={{ display: "flex", flexFlow: "row" }}>
              <div className="ico">
                <img src={fb} alt="fb" />
              </div>
              <div className="ico">
                <img src={twit} alt="twit" />
              </div>
              <div className="ico">
                <img src={link} alt="linkdin" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default JKlucent;
