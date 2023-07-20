import React from "react";

const currentYear = new Date().getFullYear();

function Footer(){
    return <footer>
    <p>Copyright © {currentYear} Omar Elkashef</p>
    </footer>;
}

export default Footer;