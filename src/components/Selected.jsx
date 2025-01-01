import { useState } from "react";

const Selected =({selectedContact, setSelectedContact}) => {
    return(
        <>
        <h2>Selected Name: {selectedContact.name}</h2>
        <h2>Selected Email: {selectedContact.email}</h2>
        <h2>Selected Phone: {selectedContact.phone}</h2>

        <button onClick={()=>setSelectedContact(null)}>Back Button </button>
        </>
    )

}

export default Selected;