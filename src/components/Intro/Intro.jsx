import "./intro.scss"

export default function Intro() {
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
                   <h3>Developer</h3>
               </div>
               <a href="#portfolio">
                   <img src="assets/down.png" alt="down" />
               </a>
           </div>
        </div>
    )
}
