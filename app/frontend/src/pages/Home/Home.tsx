import React from "react";
import Header from "../../component/Header/Header";
import styled from "styled-components";

type Props = {};

const StyledBanner = styled.section`
  width: 100%;
  height: 28rem;
  background-image: url("https://static-images.vnncdn.net/files/publish/2022/8/4/tau-qua-deo-530.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
`;

const Home = (props: Props) => {
  return (
    <>
      <Header authenticated />

      <StyledBanner />
    </>
  );
};

export default Home;
