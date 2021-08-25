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
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import HomeNavbar from "components/Navbars/HomeNavbar.js";
import PagesHeader from "components/Headers/PagesHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function Contact() {

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
      <PagesHeader source={"w2.jpg"}/>
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="name">
              <h2 className="title">
                Contacto <br />
              </h2>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto " md="6">
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
        </Container>
      </div>
      <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Escribanos</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Nombre</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Nombre" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Mensaje</label>
                  <Input
                    placeholder="Cuentenos acerca de lo que necesita..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Enviar Mensaje
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      <DemoFooter />
    </>
  );
}

export default Contact;
