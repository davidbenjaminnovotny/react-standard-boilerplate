import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';

import {useTransition, animated} from "react-spring";

import {
    Link,
    BrowserRouter as Router
} from "react-router-dom"


function Nav() {

    const [showMenu, setShowMenu] = useState(false)

    const transitions = useTransition(showMenu, null, {
        from: { opacity: 1, transform:"translateX(-100%)"},
        enter: {opacity:1, transform:"translateX(0%)"},
        leave: {opacity:1,transform:"translateX(-100%)"}
    })

    const menuLinks = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Shop",
            link: "/shop"
        },
        {
            name: "Blog",
            link: "/blog"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Products",
            link: "/products"
        }
    ]


    const desktopMenu =
        <ul className="hidden  md:flex justify-between w-full ">
            { menuLinks.map((e) => {
                return <li key={e.name}><Link to={e.link}  onClick={() => setShowMenu(false)}>{e.name}</Link></li>
            })
            }
            <ul>
                <button onClick={()=>changeLang('en')}>English</button>
                <button onClick={()=>changeLang('de')}>German</button>
                <button onClick={()=>changeLang('fr')}>French</button>
            </ul>
        </ul>;

    const mobileMenu =
        <div className="">
            <h1 onClick={() => setShowMenu(!showMenu)}>Close</h1>
            <ul className="block md:hidden justify-between w-full ">
                { menuLinks.map((e) => {
                    return <li key={e.name}><Link to={e.link}  onClick={() => setShowMenu(false)}>{e.name}</Link></li>
                })
                }
            </ul> c
        </div>;

    // Trigger change of language
    const { i18n } = useTranslation();

    function changeLang(lang){
      i18n.changeLanguage(lang)
    }

    return (
        <nav className="w-1/5">

            { desktopMenu }
            <div className="flex  md:hidden w-full justify-end">
                <span className="text-2xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
                </span>
            </div>
            {transitions.map(({item, key, props}) =>
                item && <animated.div key={key} className=" fixed flex justify-center align-items bg-green-100 h-full w-full bg-yellow left-0 top-0 z-10 shadow" style={props}>{mobileMenu}</animated.div>
            )}

        </nav>
    );
}

export default Nav;
