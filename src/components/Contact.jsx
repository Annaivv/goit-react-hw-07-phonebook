import { useDispatch } from 'react-redux';
import { ButtonTemplate } from 'components/Button';
import { deleteContact } from 'Redux/operations';
import { Box, ListItemText } from '@mui/material';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <ListItemText sx={{ margin: 'auto 0', color: '#767676' }}>
        <span>{contact.name}</span>
        <span>: </span>
        <span>{contact.phone.toString()}</span>
      </ListItemText>
      <ButtonTemplate onClick={handleDelete} variant="outlined">
        Delete
      </ButtonTemplate>
    </Box>
  );
};
