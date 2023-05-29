import { Button, Elements, NameContacts } from './ContactList.styled';
import { MdDelete } from 'react-icons/md';
import { TailSpin } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { useDelete } from '../../../hook/useDelete';

export const Contact = ({ data: { phone, id, name } }) => {
  const { deleteContact, isLoading } = useDelete();

  return (
    <Elements>
      <NameContacts>
        {name}: {phone}
      </NameContacts>
      <Button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        {isLoading ? (
          <TailSpin height="20" width="20" />
        ) : (
          <MdDelete size={20} />
        )}
      </Button>
    </Elements>
  );
};

Contact.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
