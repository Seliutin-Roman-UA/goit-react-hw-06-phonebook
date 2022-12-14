import { useState } from 'react';
import { Form, NameNumber, Btn } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';

export function ContactForm() {
  const dispatch = useDispatch();

  const initstate = { name: '', number: '' };
  const [contact, setContact] = useState(initstate);

  const changeElement = event => {
    const fromAttName = event.target.name;
    setContact({ ...contact, [fromAttName]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    setContact(initstate);
    dispatch(addContact(contact));
  };

  return (
    <Form onSubmit={submitForm}>
      <label>
        Name
        <NameNumber
          type="text"
          name="name"
          value={contact.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={changeElement}
        />
      </label>
      <label>
        Number
        <NameNumber
          type="tel"
          name="number"
          value={contact.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={changeElement}
        />
      </label>
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
}
