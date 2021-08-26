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
import DemoFooter from "components/Footers/DemoFooter.js";

function OurCompany() {
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
      <PagesHeader source={"ourcompany.jpg"}/>
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/mainlogo.png").default}
              />
            </div>
            <div className="name">
              <h2 className="title">
                Termoformados Campos <br />
              </h2>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h6 className="description">¿Quienes somos?</h6>
              <p>
                An artist of considerable range, Jane Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.
              </p>
              <br />
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h6 className="description">Nuestra Misión</h6>
              <p>
                An artist of considerable range, Jane Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.
              </p>
              <br />
            </Col>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h6 className="description">Nuestra Visión</h6>
              <p>
                An artist of considerable range, Jane Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.
              </p>
              <br />
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/ourcompany2.jpg").default}
                />
            </Col>
          </Row>
          <br />
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default OurCompany;
