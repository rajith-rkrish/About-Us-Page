import { Ccontainer } from "../../../cssComponents/servicesStyled";
import { CaseCard1 } from "../../../cssComponents/cardsStyled";
import { B32 } from "../../../cssComponents/fontsStylings";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { B12, B18, Reg14Service } from "../../../cssComponents/fontsStylings";
import "../../../Assets/css/testing.css";
import cat from "../Cards/cat.svg";
import horse from "../Cards/horse.svg";
import bird from "../Cards/bird.svg";
import tiger from "../Cards/tiger.svg";
function CaseCard() {
  return (
    // <Ccontainer className="pt-8">
    <section className="cont">
      <Ccontainer>
        <B32 className="coreV">Core Values</B32>
        <Row>
          <Col xxl={3} xl={6} lg={6} md={12} sm={12} xs={12}>
            <CaseCard1 className="cardsa">
              <div className="builder">
                <img src={tiger} alt="builder" />
              </div>
              <B18 className="fonti" style={{ color: "#255C99" }}>
                Trust
              </B18>
              <div className="toping">
                <B18 className="respect">Respect</B18>
                <Reg14Service className="Reg14Service">
                  Respect Is A Key Ingredient For A Healthy Work Environment. It
                  Lets Employees Know That They Are Valued For Their Abilities,
                  Qualities And Achievements , And That Their Role Is Important
                  To The Success Of The Organisation
                </Reg14Service>
              </div>
              {/* <B12 className="">Read More...</B12> */}
            </CaseCard1>
          </Col>
          <Col xxl={3} xl={6} lg={6} md={12} sm={12} xs={12}>
            <CaseCard1 className="cardsa">
              <div className="builder">
                <img src={cat} alt="builder" />
              </div>
              <B18 className="fonti" style={{ color: "#255C99" }}>
                Respect
              </B18>
              <div className="toping">
                <B18 className="respect">Respect</B18>
                <Reg14Service className="Reg14Service">
                  Respect Is A Key Ingredient For A Healthy Work Environment. It
                  Lets Employees Know That They Are Valued For Their Abilities,
                  Qualities And Achievements , And That Their Role Is Important
                  To The Success Of The Organisation
                </Reg14Service>
              </div>
              {/* <B12 className="">Read More...</B12> */}
            </CaseCard1>
          </Col>
          <Col xxl={3} xl={6} lg={6} md={12} sm={12} xs={12}>
            <CaseCard1 className="cardsa">
              <div className="builder">
                <img src={bird} alt="builder" />
              </div>
              <B18 className="fonti" style={{ color: "#255C99" }}>
                Open-minded
              </B18>
              <div className="toping">
                <B18 className="respect">Respect</B18>
                <Reg14Service className="Reg14Service">
                  Respect Is A Key Ingredient For A Healthy Work Environment. It
                  Lets Employees Know That They Are Valued For Their Abilities,
                  Qualities And Achievements , And That Their Role Is Important
                  To The Success Of The Organisation
                </Reg14Service>
              </div>
              {/* <B12 className="">Read More...</B12> */}
            </CaseCard1>
          </Col>
          <Col xxl={3} xl={6} lg={6} md={12} sm={12} xs={12}>
            <CaseCard1 className="cardsa">
              <div className="builder">
                <img src={horse} alt="builder" />
              </div>
              <B18 className="fonti" style={{ color: "#255C99" }}>
                Continuous learning
              </B18>
              <div className="toping">
                <B18 className="respect">Respect</B18>
                <Reg14Service className="Reg14Service">
                  Respect Is A Key Ingredient For A Healthy Work Environment. It
                  Lets Employees Know That They Are Valued For Their Abilities,
                  Qualities And Achievements , And That Their Role Is Important
                  To The Success Of The Organisation
                </Reg14Service>
              </div>
              {/* <B12 className="">Read More...</B12> */}
            </CaseCard1>
          </Col>
        </Row>
      </Ccontainer>
    </section>
  );
}

export default CaseCard;
