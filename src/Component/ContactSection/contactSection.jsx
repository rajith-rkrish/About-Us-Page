import { FormSpacings, Head, SubHead, Texxt } from "./contactStyled";
import ContactsForm from "./contactForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Ccontainer } from "../../cssComponents/LandingStyled";
import "../ContactSection/contact.css";

function contactSection() {
  return (
    <>
      <div className="cntactpage">
        <Ccontainer>
          <Row>
            <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
              <Texxt>
                <Head>
                  Get In Touch <blu>With Us</blu>
                </Head>
                <SubHead>
                  Are You Looking To Implement Microservice Architecture For
                  Your Monolithic Application?
                  <br />
                  Or Do You Want To <blu>Migrate</blu> To The Cloud?
                </SubHead>
              </Texxt>
            </Col>
            <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
              <FormSpacings>
                <ContactsForm />
              </FormSpacings>
            </Col>
          </Row>
        </Ccontainer>
      </div>
    </>
  );
}

export default contactSection;
