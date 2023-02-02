import FooterTop from "../Footer/FooterTop";
import React from "react";
import { Plast } from "../../cssComponents/fontStyling";
import "../../Assets/css/FooterStyled.css";
import "../../Assets/css/style.css";

const FooterMain = () => {
  return (
   
      <section style={{ borderBottom: "4px solid #1C88FF" }}>
        <footer className="bg-C4 foot">
          <section>
            <FooterTop />
          </section>
          <div className="container fontsz justify-content-middle pb-5">
            <Plast>
              <br />
              Copyright © 2018-2022 JK Lucent. All rights reserved.
            </Plast>
          </div>
        </footer>
      </section>
    
  );
};

export default FooterMain;
