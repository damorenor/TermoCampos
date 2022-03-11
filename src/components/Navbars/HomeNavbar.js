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
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from "reactstrap";

function HomeNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/home"
            target=""
            title="Termoformamos sus ideas"
            tag={Link}
          >
            Termoformados Campos
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to="/servicios" tag={Link}>
                <i className="nc-icon nc-settings" /> Servicios
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/nosotros" tag={Link}>
                <i className="nc-icon nc-badge" /> Nosotros
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://wa.me/573203420409"
                target="_blank"
                title="Escribenos en Whatsapp!"
              >
                <i className="fa fa-whatsapp" /> +57 320 3420409
                <p className="d-lg-none"> Whatsapp</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                to="/contacto"
                tag={Link}
              >
                <i className="nc-icon nc-tap-01"></i> Contactenos
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;
