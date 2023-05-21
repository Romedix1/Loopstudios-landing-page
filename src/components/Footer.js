import React from "react";

export default function Footer() {
    return (
        <footer>
            <img src="./images/logo.svg" alt="logo" className="footer--logo" />

            <ul className="footer--list">
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
            </ul>

            <div className="footer--icon-container">
                <img src="./images/icon-facebook.svg" alt="facebook icon" />
                <img src="./images/icon-twitter.svg" alt="twitter icon" />
                <img src="./images/icon-pinterest.svg" alt="pinterest icon" />
                <img src="./images/icon-instagram.svg" alt="instagram icon" />
            </div>

            <p className="footer--copyright">© 2021 Loopstudios. All rights reserved.</p>
        </footer>
    )
}