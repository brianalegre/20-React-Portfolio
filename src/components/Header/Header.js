// IMPORT
import React, { useState } from 'react';
import AboutMe from './AboutMe/AboutMe';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Resume from './Resume/Resume';
import Navbar from '../Navbar/Navbar'


function Header() {
    // CREATE STATE TO HOLD THE CURRENT PAGE
    const [currentPage, setCurrentPage] = useState('About Me');
    const renderPage = () => {
        if (currentPage === 'About Me') {
            return <AboutMe />;
        }
        if (currentPage === 'Project') {
            return <Project />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        // SEND CURRENT PAGE TO NAVBAR VIA PROPS
        <header>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </header>
    );
}

export default Header;