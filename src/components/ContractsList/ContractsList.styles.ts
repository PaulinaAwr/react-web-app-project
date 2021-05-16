import styled from 'styled-components';

import { colors, shadows } from 'styles';

export const ContractWrapper = styled.div`
  width: 100%;
  background-color: ${colors.surface};
  box-shadow: ${shadows.card};
  padding: 16px;
  cursor: pointer;
  border-radius: 4px;
  
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
  
  h3 {
    margin: 0;
    color: ${colors.link};
  }
  
  p {
    font-size: 1.4rem;
  }
  
`;

export const ContractMeta = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  color: ${colors.mutedMedium};
  font-size: 1.3rem;
  
  gap: 8px;


  span {
    display: inline-flex;
    align-items: center;

    svg {
      height: 1em;
    }
    svg, svg path {
      fill: ${colors.mutedMedium};
    }
  }

  span:not(:last-of-type)::after {
    display: inline-block;
    content: '';
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 100%;
    height: 4px;
    width: 4px;
    background-color: ${colors.mutedMedium};
  }
  
  span:last-of-type {
    color: ${colors.mutedParagraph};
  }
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;