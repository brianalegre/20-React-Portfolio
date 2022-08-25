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
    <li key={'footer_' + i} className='px-5 py-5 text-orange-500 text-3xl'>
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
        <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">Brian Alegre© 2022. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                {footerMap}
            </ul>
        </footer>
    );
}

export default Footer;