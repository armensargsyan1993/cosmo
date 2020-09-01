import React from 'react'

const NavbarLinksComponent = ({text}) => {
    return (
        <li className="nav__link">
            <a href="#">{text}</a>
        </li>
    )
}

export default NavbarLinksComponent