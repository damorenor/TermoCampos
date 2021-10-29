/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Col,
  Row,
  Container,
} from "reactstrap";

function HomeFooter() {
  return (
    <footer className="footer footer-black">
      <Container className="container">
        <Row>
          <Col>
            <nav className="footer-nav" md="4">
              <ul className="justify-content-center">
                <li>
                  <a
                    href="/home"
                  >
                    Termoformados Campos
                  </a>
                </li>
                <li>
                  <a
                    href="/contacto"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="/nosotros"
                  >
                    ¿Quienes somos?
                  </a>
                </li>
                <li>
                  <a
                    href="/contacto"
                  >
                    Contáctenos
                  </a>
                </li>
              </ul>
            </nav>
          </Col>
          <Col className="mr-auto ml-auto" md="6">
            <br/>
            <p>Calle 42D Sur # 79F - 21, Bogotá D.C.</p>
            <p>Teléfono: 3351269</p>
            <p>Whatsapp: +57 304 33511269</p>
          </Col>
          <Col className="justify-content-end mt-5" md="2">
            <img
                alt="..."
                className="img-footer img-no-padding img-responsive"
                src={require("assets/img/mainlogo.svg").default}
              />
          </Col>
        </Row>
        <Row>
          <div className="credits mr-auto ml-auto">
            <span className="copyright">
              {new Date().getFullYear()} Termoformados Campos
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default HomeFooter;
