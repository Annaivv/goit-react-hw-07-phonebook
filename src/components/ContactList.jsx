import { List, ListItem } from '@mui/material';
import { Contact } from 'components/Contact';
import { selectFilteredContacts } from 'Redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id} disableGutters>
          <Contact contact={contact} />
        </ListItem>
      ))}
    </List>
  );
};
