import React from "react";
import Header from "../../component/Header/Header";
import {
  CommonStyledBackgroundImages,
  CommonStyledFlex,
  StyledLink,
  StyledTextP,
} from "../../component/StyleComponent";
import { color } from "../../constant/styles";
import {
  StyledBanner,
  StyledArticle,
  StyledGridDestinationContainer,
  StyledGridDestinationHeader,
  StyledGridDestinationItems,
  StyledOverlay,
} from "./styles";

const Home = () => {
  const popularDestinations = [
    {
      id: 1,
      url: "https://dulichkhampha24.com/wp-content/uploads/2020/06/cau-vang-da-nang-5-1.jpg",
      title: "Da Nang",
    },
    {
      id: 2,
      url: "https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-nen-Ha-Noi.jpg",
      title: "Ha Noi",
    },
    {
      id: 3,
      url: "https://pix10.agoda.net/geo/city/2679/1_2679_02.jpg?ca=6&ce=1&s=1920x822",
      title: "Nha Trang",
    },
    {
      id: 4,
      url: "https://i1-dulich.vnecdn.net/2022/06/06/1IMG-5318-5102-1654526021.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=3W45y7igU_FW7jW-ugDyLA",
      title: "Da Lat",
    },
    {
      id: 5,
      url: "https://gonatour.vn/vnt_upload/news/01_2021/ve_dep_eo_gio_quy_nhon_gonatour.jpg",
      title: "Quy Nhon",
    },
    {
      id: 6,
      url: "https://bcp.cdnchinhphu.vn/uploaded/1/truonggiangthanh/2021_10_22/tth_NHCP.jpg",
      title: "Hue",
    },
  ];
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

      <StyledGridDestinationContainer>
        <StyledGridDestinationHeader>
          Popular destinations
        </StyledGridDestinationHeader>
        {popularDestinations.map(({ id, url, title }) => (
          <StyledGridDestinationItems
            key={id}
            $backgroundImage={url}
            $backgroundPosition="center"
            $backgroundSize="cover"
            $borderRadius="1rem"
            $position="relative"
          >
            <StyledOverlay $borderRadius="1rem" />
            <StyledTextP
              $color="white"
              $letterSpacing="1px"
              $position="absolute"
              $bottom="1rem"
            >
              {title}
            </StyledTextP>
          </StyledGridDestinationItems>
        ))}
      </StyledGridDestinationContainer>
    </>
  );
};

export default Home;
