import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Footer from "../../component/Footer";
import { texts, colors } from "../../constant";
import Header from "../../component/Header/Header";
import { popularDestinations, reasonBoxs, FAQs } from "./data";
import {
  CommonStyledBackgroundImages,
  CommonStyledBox,
  CommonStyledFlex,
  StyledLink,
  StyledTextP,
} from "../../component/StyleComponent";
import {
  StyledBanner,
  StyledArticle,
  StyledGridDestinationContainer,
  StyledGridDestinationHeader,
  StyledGridDestinationItems,
  StyledOverlay,
  StyledArticleTitle,
  StyledReasonBox,
  StyledFAQ,
} from "./styles";
import DatePicker from "../../component/DatePicker";
import SearchTrainBar from "../../component/SearchTrainBar";

const Home: React.FC = () => {
  const [answersDisplay, setAnswersDisplay] = useState<number[]>([0]);

  const handleDisplayAnswer = (key: number) => {
    setAnswersDisplay((currentAnswerList) => {
      if (currentAnswerList.includes(key)) {
        return currentAnswerList.filter((answer) => answer !== key);
      }
      return [...currentAnswerList, key];
    });
  };

  return (
    <>
      <Header isAuthenticated={true} />
      <StyledBanner>
        <SearchTrainBar />
      </StyledBanner>

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
          <StyledArticleTitle>
            {texts.TITLE_ABOUT_TRAVELBLISS}
          </StyledArticleTitle>

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

          <StyledLink to="" $textDecoration="none" $color={colors.primary600}>
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
          <StyledArticleTitle>{texts.TITLE_LATEST_NEWS}</StyledArticleTitle>

          <StyledTextP
            $color={colors.secondary300}
            $marginBottom="1.5rem"
            $fontStyle="italic"
          >
            {texts.DATE_NEWS}
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

          <StyledLink to="" $textDecoration="none" $color={colors.primary600}>
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
            key={`${id}-item`}
            $backgroundImage={url}
            $backgroundPosition="center"
            $backgroundSize="cover"
            $borderRadius="1rem"
            $position="relative"
          >
            <StyledOverlay $borderRadius="1rem" />
            <StyledTextP
              key={`${id}-title`}
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

      <CommonStyledFlex
        $alignItems="center"
        $flexDirection="column"
        $backgroundColor={colors.primary50}
        $marginTop="3rem"
        $paddingBottom="3rem"
        $paddingTop="3rem"
      >
        <StyledArticleTitle $marginBottom="1rem">
          {texts.TITLE_WHY_CHOOSE}
        </StyledArticleTitle>

        <StyledTextP $marginBottom="2rem">
          {texts.CONTENT_WHY_CHOOSE}
        </StyledTextP>

        <CommonStyledFlex>
          {reasonBoxs.map(({ icon, heading, content }, index) => (
            <StyledReasonBox key={index}>
              <StyledTextP
                $textAlign="center"
                $color={colors.primary500}
                $fontSize="1.5rem"
                $marginBottom="0.5rem"
              >
                <FontAwesomeIcon icon={icon} />
              </StyledTextP>

              <StyledTextP
                $fontWeight="600"
                $marginBottom="1rem"
                $textAlign="center"
              >
                {heading}
              </StyledTextP>

              <StyledTextP $lineHeight="1.5" $textAlign="center">
                {content}
              </StyledTextP>
            </StyledReasonBox>
          ))}
        </CommonStyledFlex>
      </CommonStyledFlex>

      <StyledArticle $flexDirection="column">
        <StyledArticleTitle>{texts.FAQ}</StyledArticleTitle>
        {FAQs.map(({ question, answer }, index) => (
          <StyledFAQ key={index} onClick={() => handleDisplayAnswer(index)}>
            <StyledTextP $marginBottom="1rem" $fontWeight="600">
              {question}
            </StyledTextP>

            {answersDisplay.includes(index) && (
              <StyledTextP $color={colors.secondary500}>{answer}</StyledTextP>
            )}

            <CommonStyledBox $position="absolute" $right="1rem" $top="1rem">
              <FontAwesomeIcon icon={faChevronDown} />
            </CommonStyledBox>

            <StyledOverlay $background="transparent" />
          </StyledFAQ>
        ))}
      </StyledArticle>

      <Footer />
    </>
  );
};

export default Home;
