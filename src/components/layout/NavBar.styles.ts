import styled from 'styled-components';

import { colors, shadows, media } from 'styles';
import { contained } from 'styles/shared';

export const NavBarWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  position: fixed;
  top: 0;
  
  background-color: ${colors.surface};
  box-shadow: ${shadows.navbar};
`;

export const SearchWrapper = styled.div`
  display: none;
  width: 500px;
  max-width: 100%;
  
  input {
    width: 100%;
  }
  
  ${media.lg} {
    display: flex;
  }
`;

export const NavIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  
  ${media.sm} {
    width: unset;
  }
  
  div {
    height: 40px;
    width: 40px;
    padding: 9px;
    border-radius: 50%;
    cursor: pointer;
    
    &:not(:first-child) {
      background-color: #eee;
    }
    
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export const NavBarContainer = styled.div`
  ${contained};
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  padding: 10px 0;
  flex-wrap: wrap;
  height: 100%;
  
  ${media.sm} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    padding: 0 10px;
  }
`;