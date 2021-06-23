import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  user-select: none;
  
  ul {
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: center;
    column-gap: 15px;
    
    a {
      cursor: pointer
    }
    
    li.selected {
      font-weight: 700;
    }
  }
`;