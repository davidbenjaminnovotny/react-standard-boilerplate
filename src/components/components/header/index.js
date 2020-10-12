import React from 'react';

import Nav from './nav'
import Logo from './logo'


function Header() {
    return (
        <header className="header w-full h-24 flex justify-between p-4 items-center bg-gray-200 shadow z-20">
            <Logo/>
             <Nav/>
        </header>
    );
}

export default Header;
