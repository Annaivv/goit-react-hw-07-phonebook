import { Contact } from 'components/Contact/Contact';
import { ItemsList, ListItem } from './ContactList.styled';
import { getContacts } from 'Redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  return (
    <ItemsList>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <Contact contact={contact} />
        </ListItem>
      ))}
    </ItemsList>
  );
};
