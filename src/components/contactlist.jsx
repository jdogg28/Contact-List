import React from "react"; 
import ContactRow from "./contactrow";
import {useEffect} from 'react'
import { useState } from "react";


const ContactList = ({ selectedContact, setSelectedContact }) => { 
    const contacts = [
        { id: 1, name: "R2-D2", phone: "319-430-2464", email: "r2d2@droids.com"},
        { id: 2, name: "C-3PO", phone: "815-474-6794", email: "c3po@droids.com"},
        { id: 3, name: "BB-8",  phone: "555-432-8673", email: "bb8@droids.com"},
      ];

    const [allContacts, setAllContacts] = useState(contacts)
    


    useEffect(() => {
        // This runs only once after the component has mounted
        const fetchContacts = async () => {
            try{
                const response = await fetch(
                    "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
                );
                const data = await response.json();
                setAllContacts(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchContacts();
    }, []);


  return ( 
    <>
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
                allContacts &&(
                allContacts.map((contact, index) => (
                    

                    <ContactRow key={index} contact={contact} setSelectedContact={setSelectedContact} selectedContact={selectedContact} />
            
                ))
                )
            }

          </tbody>
        </table>
            </>
    )
}

export default ContactList;