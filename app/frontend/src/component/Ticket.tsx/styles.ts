import styled from "styled-components";
import { colors } from "../../constant";

export const TicketWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-gap: 10px;
  padding: 0 3rem;
  padding: 1.5rem 2rem;
  border: 1px solid ${colors.secondary200};
  border-radius: 0.5rem;
`

export const TicketDetails = styled.div`
  text-align: center;
  border: 1px solid ${colors.secondary200};

`