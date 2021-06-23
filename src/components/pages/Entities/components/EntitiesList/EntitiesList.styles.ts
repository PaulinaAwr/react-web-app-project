import styled, { css } from 'styled-components';

import { colors, shadows } from 'styles';
import { Card } from 'styles/shared';

export const EntitiesWrapper = styled.div<{isFullscreenMode?: boolean}>`
  display: grid;
  grid-gap: 14px;
  grid-template-columns: 1fr 1fr 1fr;
  ${({isFullscreenMode}) => isFullscreenMode && css`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const Entity = styled(Card)`
  background: ${colors.surface};
  margin-bottom: 0;
  border-radius: 3px;
  
  h4 {
    margin-top: 0;
    margin-bottom: 4px;
    color: ${colors.accentLight};
    font-weight: 400;
  }
  
  p {
    font-size: 1.3rem;
    color: ${colors.mutedParagraph};
    margin-bottom: 0;
  }
  
  &:hover {
    cursor: pointer;
  }
  
  img {
    float: left;
    margin: 0 1rem 1rem 0;
    max-height: 90%;
  }
`;

export const EntitiesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const ViewSwitch = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  box-shadow: ${shadows.switch};
  border-radius: 4px;
  overflow: hidden;
`;

export const ViewSwitchButton = styled.li<{active?: boolean}>`
  padding: .7rem;
  font-size: 1.3rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-weight: 700;
  
  &:not(:last-of-type) {
    border-right: 1px solid ${colors.separator};
  }
  
  svg {
    height: 1em;
  }
  
  ${({active}) => active && css`
    color: ${colors.accentLight};
    background: ${colors.activeSwitchBackground};
  `}
`;

export const EntitiesFilters = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  
  & > div {
    display: flex;
    gap: 4px;
    align-items: center;
  }
`;

export const FilterButton = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: ${colors.mutedParagraph};
  gap: 4px;
  
  margin: 0 .5rem;
  
  svg {
    height: 1.5em;
  }
  
  &:hover {
    color: ${colors.accentDark};
    cursor: pointer;
  }
`;

export const FiltersSeparator = styled.div`
  display: inline-block;
  width: 1px;
  height: 100%;
  min-height: 1.2em;
  border: 0;
  background: ${colors.separator};
`;

export const FilterSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4px;
  color: ${colors.accentLight};
  
  select {
    color: ${colors.accentLight};
    border: 0;

    padding: 0 4px;
    
    &:focus, &:active {
      outline: none;
    }
  }
`;

export const EntitiesContentWrapper = styled(Card)`
  padding-top: 0;
`;