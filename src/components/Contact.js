import React from 'react';

const contacts = [
    {
        contactName: "GitHub",
        contactLink: "https://github.com/brianalegre",
        contactIcon: "fa fa-github"
    },
    {
        contactName: "LinkedIn",
        contactLink: "https://www.linkedin.com/in/brian-alegre/",
        contactIcon: "fa fa-linkedin"

    },
    {
        contactName: "Email",
        contactLink: "mailto: brialegre@yahoo.com",
        contactIcon: "fa fa-envelope"

    },
    {
        contactName: "Resume",
        contactLink: "https://docs.google.com/document/d/1ib_oK6OZG6353VS7CuBLe0iwJxh_PSiM/edit?usp=sharing&ouid=100305447258009104354&rtpof=true&sd=true",
        contactIcon: "fa fa-file-text"

    },

]

const contactsMap = contacts.map((contactsItems, i) => (
    <li key={'contact_' + i} className='px-5'>
        <a href={contactsItems.contactLink} target="_blank" rel='noreferrer'>
            <i className={contactsItems.contactIcon}></i>
        </a>
    </li >
));

function Contact() {
    return (
        <footer>
            <ul className='flex justify-center'>
                {contactsMap}
            </ul>
        </footer>
    );
}

export default Contact;