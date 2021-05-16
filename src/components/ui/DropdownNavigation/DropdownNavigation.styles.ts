import styled from 'styled-components';
import { colors, media, borders, ArrowDownIcon } from 'styles';

export const DropdownWrapper = styled.div`
  height: 100%;
  font-weight: 500;
  width: 100%;
  
  ${media.sm} {
    width: 260px;
  }
`;

export const DropdownButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  background-color: ${colors.surface};
  color: ${colors.accentDark};

  svg {
    margin-right: 15px;
    fill: ${colors.accentDark};
  }
  
  ${media.sm} {
    width: 260px;
}
  
  div {
    display: flex;
    align-items: center;
  }
`;

export const DropdownIcon = styled(ArrowDownIcon)`
  margin-right: 0 !important;
`;

export const DropdownItem = styled(DropdownButton)`
  justify-content: flex-start;
  align-items: center;
  transition-duration: .2s;

  &:hover {
    color: ${colors.accentLight};
    border-left: 3px solid ${colors.accentLight};
    transition-duration: .2s;
  }
`;

export const DropdownListWrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  border: ${borders.dropdown};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  
  ${media.sm} {
    width: 260px;
    max-height: 80vh;
  }
  
  input {
    width: 100%;
  }
`;

export const ScrollableListArea = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

export const SubMenuLabel = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-top: 5px;
  margin-bottom: 3px;
  padding-left: 10px;
  
  color: #929292;
`;

export const FilterWrapper = styled.div`
  padding: 0 10px;
  margin-top: 10px;
`;

export const DropdownProfileSection = styled(DropdownItem)`
  &:hover {
    border: none;
  }
  
  img {
    border-radius: 50px;
    height: 30px;
    width: 30px;
    margin-right: 15px;
  }
  
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    
    p {
      margin-top: 0;
      max-width: calc(100% - 30px);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 3px;
    }
    
    span {
      color: ${colors.link};
      text-decoration: none;
      font-weight: 400;
      font-size: 1.3rem;
    }
  }
`;

export const LogoutButton = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 15px 0;
  font-size: 1.4rem;
  font-weight: 600;
  color: #878B91;
  border-top: ${borders.dropdown};
  
  svg {
    margin-right: 10px;
  }
  
  &:hover {
    color: ${colors.accentMedium};
    svg path {
      fill: ${colors.accentMedium};
    }
  }
`;