import styled from "styled-components";
import { mediaQueries } from "styles";

export const HeaderMainContainer = styled.header`
  height: 66vh;
  width: 100vw;
`;

export const HeaderContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: space-around;
  overflow: hidden;
  padding: 3rem 2rem;
  position: fixed;
  width: inherit;

  .Header-Background {
    z-index: -1;
    filter: brightness(80%);
  }
`;

export const HeaderLogo = styled.div`
  width: 120px;

  ${mediaQueries.minLg} {
    width: 180px;
  }
`;
