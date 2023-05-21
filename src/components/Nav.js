import React from "react";
import { useState } from "react";

export default function Nav() {
    
    const [navStatus, setNavStatus] = useState(true)

    function OpenedNav() {
        return (
            <section className="openedNav-section">
                <article className="nav--top-content">
                    <img src="./images/logo.svg" alt="Logo" className="nav--logo"/>

                    <img onClick={()=>setNavStatus(true)} className="nav--close" alt="close icon" src="./images/icon-close.svg" />
                </article>

                <ul className="nav--mobile-list">
                    <li className="nav--mobile-list-element">ABOUT</li>
                    <li className="nav--mobile-list-element">CAREERS</li>
                    <li className="nav--mobile-list-element">EVENTS</li>
                    <li className="nav--mobile-list-element">PRODUCTS</li>
                    <li className="nav--mobile-list-element">SUPPORT</li>
                </ul>
            </section>
        )
    }

 

    return (
        <>
        <nav className="closedNav-section">
            <article className="nav--top-content">
                <img src="./images/logo.svg" alt="Logo" className="nav--logo"/>


                <ul className="nav--desktop-list">
                    <li className="nav--desktop-list-element">About</li>
                    <li className="nav--desktop-list-element">Careers</li>
                    <li className="nav--desktop-list-element">Events</li>
                    <li className="nav--desktop-list-element">Products</li>
                    <li className="nav--desktop-list-element">Support</li>
                </ul>
                <img onClick={()=>setNavStatus(false)} className="nav--hamburger" alt="hamburger menu" src="./images/icon-hamburger.svg" />
            </article>

            <article className="nav--header-box">
                <h1 class="nav--header">Immersive experiences that <br /> deliver</h1>
            </article>

            {navStatus==false && <OpenedNav />}
        </nav>
        </>
    )
}