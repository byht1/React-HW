import { Input, Button, FormBox } from './Form.styled';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function Form({ submit, value, onChang }) {
  return (
    <div>
      <FormBox autoComplete="off" onSubmit={submit}>
        <Button type="submit">
          <FaSearch size={29} />
        </Button>
        <Input
          type="text"
          autoFocus
          value={value}
          name="name"
          onChange={e => onChang(e.target.value)}
        />
      </FormBox>
    </div>
  );
}

Form.propTypes = {
  submit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChang: PropTypes.func.isRequired,
};
