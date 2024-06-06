import styled from "styled-components";
import { colors } from "../../constant";

export const TicketWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-gap: 10px;
  padding: 0 3rem;
  padding: 1rem 0;
  border: 1px solid ${colors.secondary300};
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
`

export const TicketDetailsWrapper = styled.div``

export const TicketDetails = styled.p<{ $fontWeight?: string }>`
  line-height: 1.5;
  text-align: center;
  font-weight: ${({ $fontWeight }) => $fontWeight ?? '500'};
`
