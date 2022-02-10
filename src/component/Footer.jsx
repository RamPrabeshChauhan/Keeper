import React from "react";

const currentYear = new Date().getFullYear();

function Footer()
{
    return(
        <div className="footer1">
            <p className="footer2">Copyrighte ⓒ {currentYear}</p>
        </div>
    ); 
};

export default Footer;