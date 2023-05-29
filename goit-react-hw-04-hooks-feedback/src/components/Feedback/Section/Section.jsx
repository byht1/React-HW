import PropTypes from 'prop-types';
import { Div, Title } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <Div>
      <Title>{title}</Title>
      {children}
    </Div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
