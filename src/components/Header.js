import React from 'react';

const navbar = [
    {
        navName: "About Me",
        navLink: "#aboutMe"
    },
    {
        navName: "Skills",
        navLink: "#skills"
    },
    {
        navName: "Tools",
        navLink: "#tools"
    },
    {
        navName: "Apps",
        navLink: "#apps"
    },
    {
        navName: "Contact",
        navLink: "#contact"
    },
]


function Header() {
    return (
        <header>
            <h1> Brian Alegre </h1>
            {/* IMG LOGO */}
            <img src="/assets/logo/BAlogo/Brian Alegre-logos.jpeg" alt="Brian Alegre Logo" />
            <nav>
                <ul>
                    {navbar.map((navItems) => (
                        <li>
                            <a href={navItems.navLink}> {navItems.navName} </a>
                        </li>
                    ))}
                </ul>
            </nav >
        </header>
    );
}

export default Header;