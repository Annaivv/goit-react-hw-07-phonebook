import { Contact } from 'components/Contact/Contact';
import { ItemsList, ListItem } from './ContactList.styled';
import { getFilteredContacts } from 'Redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

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
