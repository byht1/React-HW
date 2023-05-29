import s from './Feedback.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.boxButton}>
      {options.map(x => (
        <li className={s.elements} key={x}>
          <button
            key={x}
            className={s.button}
            type="button"
            name={x}
            onClick={onLeaveFeedback}
          >
            {x}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
