import sprite from './sprite.svg';
import {
  StyledCardBox,
  StyledItem,
  StyledItemsList,
  StyledLink,
  StyledLinkWrapper,
  StyledSvg,
  StyledTitle,
} from './Card.styled';

export const Card = ({ cardInfo }) => {
  const { title, items, borderColor, icon } = cardInfo;
  return (
    <StyledCardBox bordercolor={borderColor}>
      <div>
        <StyledSvg>
          <use href={sprite + icon}></use>
        </StyledSvg>
        <StyledTitle>{title}</StyledTitle>
        <StyledItemsList>
          {items.map((item, index) => (
            <StyledItem key={index}>{item}</StyledItem>
          ))}
        </StyledItemsList>
      </div>

      <StyledLinkWrapper>
        <StyledLink href="/">View more</StyledLink>
      </StyledLinkWrapper>
    </StyledCardBox>
  );
};
