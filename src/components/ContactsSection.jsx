import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { SectionLayout } from './SectionLayout';

export const ContactsSection = () => {
  return (
    <SectionLayout text="Contacts">
      <Filter />
      <ContactList />
    </SectionLayout>
  );
};
