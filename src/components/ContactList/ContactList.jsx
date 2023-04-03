import { Contact } from 'components/Contact/Contact';
import { ItemsList, ListItem } from './ContactList.styled';
import { selectFilteredContacts } from 'Redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

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
