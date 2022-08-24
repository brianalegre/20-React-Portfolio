// IMPORT
import React, { useState } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import Navigation from '../Navigation/Navigation'


function Header() {
    // CREATE STATE TO HOLD THE CURRENT PAGE
    const [currentPage, setCurrentPage] = useState('About Me');
    const renderPage = () => {
        if (currentPage === 'About Me') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        // SEND CURRENT PAGE TO NAVBAR COMPONENT VIA PROPS
        <header>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </header>
    );
}

export default Header;