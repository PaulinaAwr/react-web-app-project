import styled from 'styled-components';

import { shadows, colors } from 'styles';

export const SidebarProfileSection = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: ${shadows.card};
  border-radius: 4px;
  padding: 20px 0;
  text-align: center;
  
  h3 {
    color: ${colors.accentLight};
    margin-top: 10px;
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 1.6rem;
  }
  
  p {
    color ${colors.mutedParagraph};
    font-size: 1.4rem;
    margin-bottom: 20px;
  }
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;

export const Separator = styled.hr`
  height: 1px;
  background-color: ${colors.separator};
  border: none;
`;

export const SidebarProfileControl = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  margin-top: 10px;
`;

export const SidebarProfileControlButton = styled.a`
  padding: .5rem;
  border: 1px solid #a0a0a0;
  box-shadow: 0 1px 2px #d7d7d7;
  border-radius: 10px;
  height: 30px;
  width: 40px;

  transition-duration: .1s;
  cursor: pointer;

  svg {
    max-height: 100%;
    max-width: 100%;
  }

  &:hover {
    box-shadow: none;
    transform: translateY(1px);
    transition-duration: .1s;
  }
`;

export const SidebarProfileControlLink = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  color: ${colors.accentMedium};
  
  svg {
    margin-right: 10px; 
  }
  
  &:hover {
    color: ${colors.accentLight};
  }
`;

export const SidebarNavigationItem = styled.a`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-left: 25px;
  cursor: pointer;
  font-weight: 600;
  color: ${colors.mutedParagraph};
  height: 1.8em;
  
  svg {
    margin-right: 15px;
    width: 1.5em;
    max-height: 100%;
  }

  &:hover {
    color: ${colors.accentMedium};
  }
`;

export const SidebarWrapper = styled.div`
  margin-bottom: 64px;  
`;