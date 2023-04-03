import { ContactBlock } from './Contact.styled';
import { Button } from 'components/Button/Button';

export const Contact = ({ contact }) => {
  return (
    <ContactBlock>
      <p>
        <span>{contact.name}</span>
        <span>: </span>
        <span>{contact.phone.toString()}</span>
      </p>
      <Button>Delete</Button>
    </ContactBlock>
  );
};
