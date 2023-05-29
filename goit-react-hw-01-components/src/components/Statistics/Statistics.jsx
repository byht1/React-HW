import PropTypes from 'prop-types';
import {
  StatisticsSection,
  TitleName,
  StatsList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
import { getRandomHexColor } from '../function/randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <TitleName>{title}</TitleName>}
      <StatsList>
        {stats.map(x => (
          <Item key={x.id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{x.label}</Label>
            <Percentage>{x.percentage}%</Percentage>
          </Item>
        ))}
      </StatsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
