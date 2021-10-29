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
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import HomeNavbar from "components/Navbars/HomeNavbar.js";
import PagesHeader from "components/Headers/PagesHeader.js";
import HomeFooter from "components/Footers/HomeFooter.js";

function Services() {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <HomeNavbar />
      <PagesHeader source={"w3.jpeg"}/>
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="name">
              <h2 className="title">
                Servicios <br />
              </h2>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto " md="6">
              <h6 className="description">Termoformado</h6>
              <p>
                An artist of considerable range, Jane Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.
              </p>
              <br />
            </Col>
            <Col className="ml-auto mr-auto" md="6">
              <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/ourcompany2.jpg").default}
                />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="ml-auto mr-auto" md="6">
              <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/ourcompany2.jpg").default}
                />
            </Col>
            <Col className="ml-auto mr-auto " md="6">
              <h6 className="description">Troquelado</h6>
              <p>
                An artist of considerable range, Jane Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.
              </p>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
      <HomeFooter />
    </>
  );
}

export default Services;
