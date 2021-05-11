import styled from 'styled-components';

import { media } from 'styles';
import { contained } from 'styles/shared';

export const WebsiteContent = styled.div`
  ${contained};
  
  display: grid;
  column-gap: 40px;
  grid-template-columns: 100%;
  padding: 0 20px;
  
  ${media.sm} {
    grid-template-columns: 300px auto;
  }
`;