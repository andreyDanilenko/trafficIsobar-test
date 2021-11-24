import React from 'react'
import './footer.scss'

function Footer() {
    const date = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__text">Copyright © {date}</div>
            </div>
        </footer>
    )
}

export default Footer
