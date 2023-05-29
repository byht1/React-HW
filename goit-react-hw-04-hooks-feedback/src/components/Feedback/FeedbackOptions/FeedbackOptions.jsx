import PropTypes from 'prop-types';
import { List, Button, Elements } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <List>
      {options.map(x => (
        <Elements key={x}>
          <Button key={x} type="button" name={x} onClick={onLeaveFeedback}>
            {x}
          </Button>
        </Elements>
      ))}
    </List>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
