import React from "react";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Logo
            </a>
          </Col>

          <Col xs="auto">
            <NavLink
              className="header__link"
              to="/photos"
              // activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
