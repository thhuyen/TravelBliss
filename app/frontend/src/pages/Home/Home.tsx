import React from "react";
import Header from "../../component/Header/Header";
import {
  CommonStyledBackgroundImages,
  CommonStyledFlex,
  StyledLink,
  StyledTextP,
} from "../../component/StyleComponent";
import { color } from "../../constant/styles";
import { StyledBanner, StyledArticle } from "./styles";

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
        <CommonStyledFlex
          $width="55%"
          $alignSelf="center"
          $flexDirection="column"
          $paddingLeft="2rem"
        >
          <StyledTextP
            $color={color.primary500}
            $fontSize="2rem"
            $fontWeight="600"
            $marginBottom="2rem"
          >
            About TravelBliss
          </StyledTextP>

          <StyledTextP
            $lineHeight="1.5"
            $textAlign="justify"
            $marginBottom="1.5rem"
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

          <StyledLink to="" $textDecoration="none" $color={color.primary600}>
            Read more &#8594;
          </StyledLink>
        </CommonStyledFlex>
      </StyledArticle>

      <StyledArticle>
        <CommonStyledFlex
          $width="45%"
          $alignSelf="center"
          $flexDirection="column"
          $paddingRight="2rem"
        >
          <StyledTextP
            $color={color.primary500}
            $fontSize="2rem"
            $fontWeight="600"
          >
            Our latest news
          </StyledTextP>

          <StyledTextP
            $color={color.secondary300}
            $marginTop="1.5rem"
            $marginBottom="1.5rem"
            $fontStyle="italic"
          >
            02 April 2023
          </StyledTextP>

          <StyledTextP
            $lineHeight="1.5"
            $textAlign="justify"
            $marginBottom="1.5rem"
          >
            In addition to the daily running of the North-South Reunification
            train, from April 28th to May 3rd, the railway will increase 52
            passenger trains, focusing on tourist destinations such as Da Nang,
            Vinh, Quy Nhon, and Nha Trang.
            <br /> <br />
            The demand for travel during the holiday period is high, so in the
            Northern region, 22 train groups will operate on routes from Hanoi
            to 6 provinces and cities, and vice versa. The route with the most
            additional trains is Hanoi-Vinh with 9 trains; Dong Hoi has 6
            trains; Hai Phong has three trains, and Thanh Hoa has two more
            trains. Two other routes from Hanoi to Lao Cai and Da Nang will each
            have an additional train during the holiday
          </StyledTextP>

          <StyledLink to="" $textDecoration="none" $color={color.primary600}>
            Read more &#8594;
          </StyledLink>
        </CommonStyledFlex>

        <CommonStyledBackgroundImages
          $width="55%"
          $backgroundImage="https://i1-vnexpress.vnecdn.net/2023/03/11/khach-di-tau-jpeg-3643-1625722-2361-8120-1678510955.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=Qzkbnik_CszsrIzXso-kPw"
          $backgroundPosition="center"
          $borderRadius="1.5rem"
        />
      </StyledArticle>
    </>
  );
};

export default Home;
