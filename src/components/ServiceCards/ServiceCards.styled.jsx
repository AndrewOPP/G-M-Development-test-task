import styled from 'styled-components';

export const StyledCardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
  list-style-type: none;
  margin: 30px;
  padding: 0;
  @media (max-width: 450px) {
    margin: 10px;
  }
`;
