import cardsData from '../../cardsData.json';
import { Card } from 'components/Card/Card';
import { StyledCardsList } from './ServiceCards.styled';
export const ServiceCards = () => {
  return (
    <StyledCardsList>
      {cardsData.map((cardInfo, index) => (
        <li key={index}>
          <Card cardInfo={cardInfo} />
        </li>
      ))}
    </StyledCardsList>
  );
};
