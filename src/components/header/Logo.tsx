import React from 'react'

const LogoComponent = ()=>{
    return(
        <div className="logo">
            <svg width="33px" height="32px"  viewBox="0 0 33 32">
                <use xlinkHref="./public/img/header/logo.svg#logo"></use>
            </svg>
            <span className="ml-2 font-weight-bold">GLOBAL</span>
        </div>
    )
}

export default LogoComponent