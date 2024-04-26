import React from "react";
import Header from "../../component/Header/Header";
import styled from "styled-components";
import {
  CommonStyledBackgroundImages,
  CommonStyledBox,
  StyledTextP,
} from "../../component/StyleComponent";
import { color } from "../../constant/styles";

const StyledBanner = styled.section`
  width: 100%;
  height: 28rem;
  background-image: url("https://static-images.vnncdn.net/files/publish/2022/8/4/tau-qua-deo-530.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 140%;
`;

const StyledArticle = styled.section`
  max-width: 80rem;
  height: 30rem;
  display: flex;
  justify-content: space-between;
  margin: 3rem auto;
  padding: 0 2rem;
`;
const Home = () => {
  return (
    <>
      <Header authenticated />
      <StyledBanner />

      <StyledArticle>
        <CommonStyledBackgroundImages
          $width="45%"
          $backgroundImage="https://thesmartlocal.com/vietnam/wp-content/uploads/2020/09/3-Da-Lat-Trai-Mat-3.jpg"
          $backgroundPosition="center"
          $borderRadius="1.5rem"
        />
        <CommonStyledBox $width="55%">
          <StyledTextP
            $color={color.primary600}
            $fontSize="2rem"
            $fontWeight="600"
            $textAlign="center"
            $marginBottom="1rem"
          >
            About TravelBliss
          </StyledTextP>

          <StyledTextP
            $lineHeight="1.5"
            $textAlign="justify"
            $width="70%"
            $marginLeft="auto"
            $marginRight="auto"
          >
            TravelBliss was established for the purpose of operating the
            national passenger rail services on behalf of the government of
            Vietnam. Currently TravelBliss operates in 35 provinces across
            Vietnam, with 3 main routes covering a distance of over 2,600
            kilometers.
            <br /> <br />
            With the vision of connecting and uniting Vietnam's cities and
            people, we offer the service which is reliable, efficient,
            sustainable, and environmentally friendly, thus meeting the needs of
            all tourists.
            <br /> <br />
            Traveling across Vietnam by train with TravelBliss is a pleasure
            with comfortable seats and a pleasant atmosphere. Electrical outlets
            and Wi-Fi Internet access are available on most fleet vehicles. The
            type of equipment varies, and it depends on availability.
          </StyledTextP>
        </CommonStyledBox>
      </StyledArticle>

      <StyledArticle>
        <StyledTextP $textAlign="justify" $width="50%">
          <StyledTextP
            $color={color.primary600}
            $fontSize="2rem"
            $fontWeight="600"
            $textAlign="center"
            $marginBottom="1rem"
          >
            Our latest new
          </StyledTextP>
          TravelBliss was established for the purpose of operating the national
          passenger rail services on behalf of the government of Vietnam.
          Currently TravelBliss operates in 35 provinces across Vietnam, with 3
          main routes covering a distance of over 2,600 kilometers.
          <br /> <br />
          With the vision of connecting and uniting Vietnam's cities and people,
          we offer the service which is reliable, efficient, sustainable, and
          environmentally friendly, thus meeting the needs of all tourists.
          <br /> <br />
          Traveling across Vietnam by train with TravelBliss is a pleasure with
          comfortable seats and a pleasant atmosphere. Electrical outlets and
          Wi-Fi Internet access are available on most fleet vehicles. The type
          of equipment varies, and it depends on availability.
        </StyledTextP>

        <CommonStyledBackgroundImages
          $width="50%"
          $backgroundImage="https://thesmartlocal.com/vietnam/wp-content/uploads/2020/09/3-Da-Lat-Trai-Mat-3.jpg"
          $backgroundPosition="center"
          $borderRadius="1.5rem"
        />
      </StyledArticle>
    </>
  );
};

export default Home;
