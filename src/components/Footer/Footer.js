import React from 'react';

const footer = [
    {
        footerName: "GitHub",
        footerLink: "https://github.com/brianalegre",
        footerIcon: "fa fa-github"
    },
    {
        footerName: "LinkedIn",
        footerLink: "https://www.linkedin.com/in/brian-alegre/",
        footerIcon: "fa fa-linkedin"

    },
    {
        footerName: "Email",
        footerLink: "mailto: brialegre@yahoo.com",
        footerIcon: "fa fa-envelope"

    },
    {
        footerName: "Resume",
        footerLink: "https://docs.google.com/document/d/1ib_oK6OZG6353VS7CuBLe0iwJxh_PSiM/edit?usp=sharing&ouid=100305447258009104354&rtpof=true&sd=true",
        footerIcon: "fa fa-file-text"

    },

]

const footerMap = footer.map((footerItems, i) => (
    <li key={'footer_' + i} className='px-5 py-5 text-slate-300 hover:text-white text-3xl'>
        <a href={footerItems.footerLink} target="_blank" rel='noreferrer'>
            <i className={footerItems.footerIcon}></i>
        </a>
    </li >
));

function Footer() {
    return (
        // <footer>
        //     <ul className='flex justify-center bottom-0'>
        //         {footerMap}
        //     </ul>
        // </footer>
        <footer className="p-4 bg-black rounded-t-xl shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-white sm:text-center">Brian Alegre © 2022. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                {footerMap}
            </ul>
        </footer>
    );
}

export default Footer;