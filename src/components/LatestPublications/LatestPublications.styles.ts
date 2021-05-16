import styled from 'styled-components';
import { colors, shadows, media } from 'styles';

export const LatestPublicationsWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  
  ${media.xl} {
    grid-template-columns: 300px auto;
    height: 300px;
  }
  
  background-color: ${colors.surface};
  box-shadow: ${shadows.card};
  border-radius: 4px;
`;

export const CoverPhotoWrapper = styled.div<{photoSrc?: string}>`
  background: linear-gradient(to top, rgba(9, 41, 92, 0.7), rgba(49, 57, 97, 0.7), rgba(73, 74, 102, 0.7), rgba(94, 93, 108, 0.7), #717171cc),
  url(${({photoSrc}) => photoSrc}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px 16px;
  border-radius: 4px 0 0 4px;

  color: #fff;

  h4, p {
    margin: 0;
    color: #fff;
  }
`;

export const LatestPublicationsContent = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  
  h3 {
    margin: 0;
    margin-bottom: 12px;
  }
`;

export const PublicationsList = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  gap: 8px;
  
  img {
    width: 60px;
    height: 60px;
  }
  
  h5 {
    margin: 0;
    cursor: pointer;
  }
`;

export const Metadata = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
  font-size: 1.2rem;
  
  span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    
    &:first-child {
      color: ${colors.mutedParagraph};
    }
  }

  img {
    border-radius: 100px;
    height: 20px;
    width: 20px;
  }
`;