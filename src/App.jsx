import { useState } from 'react';
import ContactCatalogue from './ContactCatalogue';
import ContactDetails from './ContactDetails';
import ContactList from './ContactList';
import "./index.css"

const App = () => {
  const [ singleContactDetails, setSingleContactDetails ] = useState({})
  
  return (
    <>
        <ContactList />
      {
        singleContactDetails.id ?
          <ContactDetails singleContactDetails={singleContactDetails} /> :
          <ContactCatalogue setSingleContactDetails={setSingleContactDetails} />
      }

    </>
  )
}


export default App

 //  ternary
// {
//   singlePokemonDetails.id ?
//     <ContactDetails singleContactDetails={singleContactDetails} /> :
//     <ContactCatalogue setSingleContactDetails={setSingleContactDetails} />
// }

//  condition ? true : false