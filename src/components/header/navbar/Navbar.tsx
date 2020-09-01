import React from 'react'
import NavbarLinksComponent from './NavbarLinks'

const NavbarComponent = () => {
    const links = `home,works,about,contact,hire us`
    return (
        <nav className="nav">
            <ul>
                {
                    links.split(',').map(e => {
                        return <NavbarLinksComponent text={e.toLocaleUpperCase()}/>
                    })
                }
            </ul>
        </nav>
    )
}

export default NavbarComponent