import { useState } from 'react'
import ContactList from './components/contactlist.jsx';
import Selected from './components/Selected.jsx';

function App() {

  const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];
const [contactList, setContactList] = useState(dummyContacts);
const [selectedContact, setSelectedContact] = useState(null)

  return (
    <>
    {
      selectedContact ? (
      <Selected selectedContact={selectedContact} setSelectedContact={setSelectedContact} /> 
      ) : (
        <ContactList selectedContact={selectedContact} setSelectedContact={setSelectedContact} />
      )

    }
    </>
  )
}

export default App
