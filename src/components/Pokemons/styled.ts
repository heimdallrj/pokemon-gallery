import styled from 'styled-components';

export const Conatiner = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Pokemon = styled.li`
  padding: 15px;
  border: 1px solid #ccc;
  color: #5757bb;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #ccc;
  }
`;
