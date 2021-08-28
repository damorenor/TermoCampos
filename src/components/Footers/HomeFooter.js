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
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
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
        </Row>
        <Row>
          <Col className="mr-auto ml-auto" md="10">
            <p>Calle 42D Sur # 79F - 21, Bogotá D.C.</p>
            <p>Teléfono: 3351269</p>
            <p>Whatsapp: +57 304 33511269</p>
          </Col>

          <Col className="justify-content-end" md="2">
            <img
                alt="..."
                className="img-footer img-no-padding img-responsive"
                src={require("assets/img/mainlogo.png").default}
              />
          </Col>
        </Row>
        <Row>
          <div className="credits mr-auto ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Creative Tim
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default HomeFooter;
