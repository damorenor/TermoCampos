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
import HomeFooter from "components/Footers/HomeFooter.js";
import ContactMap from "components/Map/ContactMap";
import {MapApi} from "../../config/default";

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
      <PagesHeader source={"http://termoformadoscampos.imgix.net/contacto.jpg"}/>
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="name">
              <h2 className="title">
                Contáctenos <br />
              </h2>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto " md="4">
              <h5 className="description">Comuniquese con nosotros</h5>
              <h6 className="description"><i className="fa fa-phone" />Teléfono:</h6> <p>(601) 473 3770</p>
              <h6 className="description"><i className="fa fa-whatsapp" />Celular:</h6> <p>+57 304 3351269</p>
              <h6 className="description"><i className="nc-icon nc-pin-3" />Dirección:</h6> <p>Calle 42D Sur # 79F - 21, Bogotá D.C.</p>
            </Col>
            <ContactMap
              googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&key="+MapApi}
              containerElement={<Col className="ml-auto mr-auto " md="4"></Col>}
              mapElement={<div style={{height:'100%'}}/>}
              loadingElement={<p>Cargando</p>}
            />
          </Row>
          <br />
        </Container>
      </div>
      <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Escriba su inquietud</h2>
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
      <HomeFooter />
    </>
  );
}

export default Contact;
