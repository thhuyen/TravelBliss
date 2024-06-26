import styled from "styled-components";
import {
  CommonStyledBackgroundImages,
  StyledTextP,
} from "../../component/StyleComponent";
import { colors } from "../../constant";

export const StyledBanner = styled.section`
  width: 100%;
  height: 28rem;
  background-image: url("https://static-images.vnncdn.net/files/publish/2022/8/4/tau-qua-deo-530.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 140%;
  position: relative;
`;

export const StyledArticle = styled.article<{
  $flexDirection?: "column";
}>`
  max-width: 80rem;
  display: flex;
  justify-content: "space-between";
  flex-direction: ${({ $flexDirection }) => $flexDirection ?? "row"};
  margin: 3rem auto;
  padding: 0 3rem;
`;

export const StyledGridDestinationContainer = styled.section`
  max-width: 80rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  grid-gap: 10px;
  padding: 0 3rem;
  margin: 0 auto;
`;

export const StyledGridDestinationHeader = styled.div`
  grid-column: 1 / -1;
  color: ${colors.primary500};
  font-size: 2rem;
  font-weight: 600;
  padding: 10px;
`;

export const StyledGridDestinationItems = styled(CommonStyledBackgroundImages)`
  height: 22rem;
  padding: 20px;
  background-color: #f2f2f2;
`;

export const StyledOverlay = styled.div<{
  $borderRadius?: string;
  $background?: string;
}>`
  background: ${({ $background }) => $background ?? "rgba(0, 0, 0, 0.4)"};
  border-radius: ${({ $borderRadius }) => $borderRadius ?? 0};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: ${({ $background }) => ($background ? "pointer" : "auto")};
`;

export const StyledArticleTitle = styled(StyledTextP)<{
  $marginBottom?: string;
}>`
  color: ${colors.primary500};
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: ${({ $marginBottom }) => $marginBottom ?? "2rem"};
`;

export const StyledReasonBox = styled.div`
  max-width: 20rem;
  box-shadow: 0 2px 5px ${colors.secondary300};
  padding: 1rem;
  background-color: white;

  &:nth-child(2) {
    margin: 0 2rem;
  }
`;

export const StyledFAQ = styled.div`
  position: relative;
  box-shadow: 0 2px 5px ${colors.secondary300};
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;
