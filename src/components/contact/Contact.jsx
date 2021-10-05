// import React from "react"; ---> if install and use extension ES7, no need to import React ...
import "./contact.scss"
import { useState } from "react"

export default function Contact(){
    const [message, setMessage] = useState(false) 
    const handleSubmit = (e) => {
        e.preventDefault() //prevent page from refresh
        setMessage(true) //when click 'send' button it will become true
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="shake.svg" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you ! I'll get in touch with you soon :D</span>} 
                </form>
            </div>
        </div>
    )
}