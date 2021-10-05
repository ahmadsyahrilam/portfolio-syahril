import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, //show cursor typing
            backDelay: 1500, //typing delay
            backSpeed: 60,
            strings: ['Programmer', 'Front-end Developer', 'Mobile Developer' ] }) //copy from ityped website
    },[])
    return (
        <div className="intro" id="intro">
           <div className="left">
               <div className="imgContainer">
                   <img src="assets/syahril.png" alt="syahril" />
               </div>
           </div>
           <div className="right">
               <div className="wrapper">
                   <h2>Hello ! I'm</h2>
                   <h1>Ahmad Syahril</h1>
                   <h3>Programmer <span ref={textRef}></span></h3>
               </div>
               <a href="#portfolio">
                   <img src="assets/down.png" alt="down" />
               </a>
           </div>
        </div>
    )
}
