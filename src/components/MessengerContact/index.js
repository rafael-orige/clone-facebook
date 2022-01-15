import React from "react";
import "./style.css";


const Contact = (props) => {
    return (
        <div className="contact">
            <img src="/profile-pic.png" alt="" />
            <p>{props.contactName}</p>
        </div>
    );
};

export default Contact;
