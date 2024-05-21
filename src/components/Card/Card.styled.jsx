import styled from 'styled-components';

export const StyledCardBox = styled.div`
  width: 372px;
  min-height: ${props => props.cardWidth + `px`};
  /* max-height: 528px; */

  border: 2px solid;
  border-color: ${props => props.bordercolor || 'blue'};
  display: flex;
  border-radius: 4px;
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 450px) {
    padding: 12px;
  }
`;
export const StyledTitle = styled.h2`
  margin-top: 124px;
  width: 376px;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
`;
export const StyledItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  list-style-type: disc;
  padding-left: 33px;
`;
export const StyledItem = styled.li`
  width: 346px;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
`;
export const StyledLink = styled.a`
  position: absolute;
  right: 24px;
  bottom: 24px;
  text-decoration: underline;
  text-underline-offset: 4px;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: '#000000';
  text-align: end;
`;
export const StyledLinkWrapper = styled.div`
  width: 100%;
  align-items: end;
  text-align: end;
`;
export const StyledSvg = styled.svg`
  position: absolute;
  width: 110px;
  height: 100px;
  top: 24px;
  right: 24px;
`;
