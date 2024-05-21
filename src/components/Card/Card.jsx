import sprite from './sprite.svg';
import {
  StyledCardBox,
  StyledItem,
  StyledItemsList,
  StyledLink,
  StyledSvg,
  StyledTitle,
} from './Card.styled';

export const Card = ({ cardInfo }) => {
  const { title, items, borderColor, icon, cardWidth } = cardInfo;
  return (
    <StyledCardBox bordercolor={borderColor} cardWidth={cardWidth}>
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

      <StyledLink href="/">View more</StyledLink>
    </StyledCardBox>
  );
};
