import { Field, Form, Input } from './ContactForm.styled';
import { Button } from 'components/Button/Button';

export const ContactForm = () => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Field>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Field>
      <Field>
        Phone
        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Field>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
