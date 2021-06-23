import styled from 'styled-components';

import { colors } from 'styles';

export const ProfileLabel = styled.p`
  color: ${colors.mutedParagraph};
`;

export const ProfileHeading = styled.h3`
  font-size: 1.6rem;
  color: ${colors.accentDark};
  margin-top: 0;
`;

export const FileAttachment = styled.p`
  background-color: ${colors.surfaceDark};
  border-radius: 4px;
  padding: 12px 8px;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  
  &:before {
    display: inline-block;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-image'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E");
    margin-right: 8px;
  }
`;

export const Correspondant = styled.p`
  background-color: ${colors.surfaceDark};
  border-radius: 4px;
  padding: 12px 8px;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 8px;
  margin-top: 0;
  gap: 36px;
`;

const Button = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    color: ${colors.accentLight};
  }
`;

export const MessageButton = styled(Button)`
  &:before {
    display: inline-block;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-message-circle'%3E%3Cpath d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'%3E%3C/path%3E%3C/svg%3E");
    margin-right: 8px;
  }
`;

export const ProfileButton = styled(Button)`
  &:before {
    display: inline-block;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-user'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E");
    margin-right: 8px;
  }
`;