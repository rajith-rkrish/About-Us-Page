import React from "react";
import Mask from "../Wrkwith/Mask.svg";
import { Container, Col, Row } from "react-bootstrap";
import { Btn1 } from "../../cssComponents/LandingStyled";
import "../../Assets/css/wrkwith.css"
function Wrk() {
  return (
    <div>
      <Container className="cont1">
        <Row>
          <Col>
            <div>
              <img className="handShake" src={Mask} alt="handShake" />
            </div>
          </Col>
          <Col>
            <div className="wrkWith1">
              <div className="semi32">Work With JK Lucent</div>
              <div className="reg16">
                Do you wish to work with the best global IT solution providers?
                This is your chance to make it come true.
              </div>
              <button className="buttons">Become a Partner</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Wrk;
