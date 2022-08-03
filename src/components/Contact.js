import React from 'react';

const contacts = [
    {
        contactName: "GitHub",
        contactLink: "https://github.com/brianalegre"
    },
    {
        contactName: "LinkedIn",
        contactLink: "https://www.linkedin.com/in/brian-alegre/"
    },
    {
        contactName: "Email",
        contactLink: "mailto: brialegre@yahoo.com"
    },

]

function Contact() {
    return (
        <footer>
            <ul>
                {contacts.map((cantactsItems) => (
                    <li>
                        <a href={cantactsItems.contactLink} target="_blank" rel='noreferrer'> {cantactsItems.contactName} </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Contact;