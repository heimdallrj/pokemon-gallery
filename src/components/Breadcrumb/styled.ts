import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 0 25px;
  padding: 0;
  font-size: 13px;
`;

export const Route = styled.li`
  margin: 0 10px 0 0;
  color: #0a3847;

  &::after {
    content: ' → ';
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
`;
