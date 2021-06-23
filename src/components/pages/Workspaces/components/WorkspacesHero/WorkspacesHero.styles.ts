import styled from 'styled-components';

import { colors } from 'styles';
import { Card } from 'styles/shared';

export const Wrapper = styled(Card)`
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
  
  overflow: hidden;
  position: relative;
  
  height: 250px;
  
  img {
    width: 100%;
  }
`;

export const WorkspacesHeroContent = styled.div`
  background-color: ${colors.surface};
  
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  
  padding: 8px 24px;
  display: flex;
  align-items: center;
  column-gap: 24px;
  
  p {
    font-size: 1.4rem;
    color: ${colors.mutedParagraph};
    margin: 0;
  }
  
  h4 {
    margin-bottom: 1rem;
    margin-top: 0;
  }
  
  svg {
    height: 100px;
    width: 50px;
  }
`;