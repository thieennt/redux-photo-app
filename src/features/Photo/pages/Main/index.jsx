import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";

const MainPage = () => {
  return (
    <div className="main-page">
      <Banner title="Your awesome photos ✨" backgroundUrl={Images.THREE_BG} />

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>
    </div>
  );
};

export default MainPage;
