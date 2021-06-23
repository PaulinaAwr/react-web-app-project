import styled from 'styled-components';

import { colors, media } from 'styles';
import { Card } from 'styles/shared';

export const Excerpt = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.mutedParagraph};
  font-size: 1.4rem;
`;

export const Tile = styled(Card)`
  padding: 16px;
  cursor: pointer;
  
  svg {
    width: 30px;
    height: 50px;
    color: ${colors.accentDark};
  }
  
  h4 {
    color: ${colors.accentDark};
    font-weight: 400;
    
    strong {
      font-weight: 600;
    }
    margin: 1rem 0;
  }
  
  p {
    font-size: 1.4rem;
    color: ${colors.accentLight};
    margin-bottom: 0;
  }
`;

export const TilesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 16px;
  
  ${media.sm} {
    grid-template-columns: 1fr 1fr;
  }
  
  ${media.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;