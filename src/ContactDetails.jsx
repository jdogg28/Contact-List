const ContactDetails = (props) => {
    console.log(props)

    return (
        <>
        <h1>{ props.singleContactDetails.id }</h1>
        <h1>{ props.singleContactDetails.name }</h1>
        <h1>{ props.singleContactDetails.phone }</h1>
        <h1> { props.singleContactDetails.email }</h1>
        <h1> { props.singleContactDetails.username }</h1>
        <h1> { props.singleContactDetails.address.street }</h1>
        
        </>
        
    )
}

export default ContactDetails;