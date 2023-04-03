import { useDispatch } from 'react-redux';
import { ContactBlock } from './Contact.styled';
import { Button } from 'components/Button/Button';
import { deleteContact } from 'Redux/operations';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ContactBlock>
      <p>
        <span>{contact.name}</span>
        <span>: </span>
        <span>{contact.phone.toString()}</span>
      </p>
      <Button onClick={handleDelete}>Delete</Button>
    </ContactBlock>
  );
};
