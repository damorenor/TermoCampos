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
  Card,
  CardBody,
  CardTitle,
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
import HomeHeader from "components/Headers/HomeHeader.js";
import HomeFooter from "components/Footers/HomeFooter.js";
import HomeCarousel from "views/utilities/HomeCarousel.js";

function Home() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <HomeNavbar />
      <HomeHeader />
      <div className="main">
      {/*Productos*/}
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Nuestos Servicios</h2>
                <h5 className="description">
                  Desde Termoformados Campos, ofrecemos soluciones para productos de plástico en la industria
                  farmacéutica, así como servicios de Troquelado.
                </h5>
                <br />
                <HomeCarousel/>
              </Col>
            </Row>
          </Container>
        </div>
      {/*Let's Talk About Us*/}
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Experiencia y Calidad</h2>
            <Row>
              <Col md="2"></Col>
              <Col md="5">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img
                      alt="..."
                      src={
                        "http://termoformadoscampos.imgix.net/produccion16.jpg?ar=1:1&fit=crop"
                      }
                    />
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Termoformado</CardTitle>
                      </div>
                    <p className="card-description text-center">
                      Mediante alta temperatura y vacío se producen modificaciones
                      en la estructura de las láminas de plástico (PVC, PET, PS)
                      que le permiten obtener la misma forma del molde base.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="5">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img
                      alt="..."
                      src={
                        "http://termoformadoscampos.imgix.net/produccion13.jpg?ar=1:1&fit=crop"
                      }
                    />
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Troquelado</CardTitle>
                      </div>
                    <p className="card-description text-center">
                      Corte del plástico que resulta de la presión que se ejerce sobre
                      el troquel compuesto de hojas de acero que proporcionan un corte
                      limpio con la forma requerida.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  className="btn-round"
                  color="info"
                  href="/servicios"
                  type="button"
                >
                  Ver Detalles
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      {/*Contactenos*/}
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Contáctenos</h2>
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
      </div>
      <HomeFooter />
    </>
  );
}

export default Home;
