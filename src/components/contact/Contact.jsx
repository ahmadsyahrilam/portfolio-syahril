// import React from "react"; ---> if install and use extension ES7, no need to import React ...
import "./contact.scss"
import { useState } from "react"
import emailjs from "emailjs-com";

export default function Contact(){
    
    const [message, setMessage] = useState(false) 

    function handleSubmit(e) {
        e.preventDefault() //prevent page from refresh
        setMessage(true) //when click 'send' button it will become true

        //from emailjs.com website account
        //services ID: service_qwe7p0n | email template ID: template_7iantqv | input from user (any) | user ID: user_tFBILEd7KbCBQbl97aaj7
        // send email to ahmadsyahrilabdmajid@gmail.com
        emailjs.sendForm('service_qwe7p0n', 'template_7iantqv', e.target, 'user_tFBILEd7KbCBQbl97aaj7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset() //after form submit then reset
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault() //prevent page from refresh
    //     setMessage(true) //when click 'send' button it will become true
    // }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="shake.svg" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="email" placeholder="Email"/>
                    <textarea name="message" placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you ! I'll get in touch with you soon :D</span>} 
                </form>
            </div>
        </div>
    )
}