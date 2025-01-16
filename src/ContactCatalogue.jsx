import { useEffect, useState } from 'react';


const ContactList = (props) => {
    console.log(props);
     const [ users, setUsers ] = useState([]);

      useEffect(() => {
        const getContact = async() => {
        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
        const results = await response.json();
        console.log (results)
          setUsers(results);
        }
    
        getContact();
      }, []);

      const getContactDetails = async (contactId) => {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}`)
        const contactDetails = await response.json();
        props.setSingleContactDetails(contactDetails);
      }
    
    return (
        <ul>
        {
        users.map((individualContact) => {
          return (
          <li 
            onClick={ () => { getContactDetails(individualContact.id) }}
            key={individualContact.id}
          >
            { individualContact.name }
          </li>
        )
        })
        }
      </ul>
    )
};

export default ContactList;