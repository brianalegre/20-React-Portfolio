// IMPORT
import React from 'react';

// GET PROPS FROM PARENT COMPONENT
function Navigation({ currentPage, handlePageChange }) {

    // NAVBAR ITEMS
    const navbar = [
        {
            navName: "About Me",
            navLink: "#aboutMe"
        },
        {
            navName: "Portfolio",
            navLink: "#portfolio"
        },
        {
            navName: "Contact",
            navLink: "#contact"
        },
        {
            navName: "Resume",
            navLink: "#resume"
        }
    ].map(navItems => ({ ...navItems, active: navItems.navName === currentPage }));

    return (

        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-300 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <a className="" href="##">
                        Brian Alegre
                    </a>
                </div>
                <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                    <ul className="flex flex-col lg:flex-row list-none ml-auto">
                        {navbar.map((navItems, i) => (
                            <li key={navItems.navLink} className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href={navItems.navLink}>
                                    {navItems.navName}
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </nav >

    );
}

export default Navigation;