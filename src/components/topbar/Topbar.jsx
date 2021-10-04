//use file name Topbar.js also can, but if use Topbar.jsx VS code will know we're working with ReactJS
import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">syahril.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>8970 8689 707</span>
                    </div>
                    <div className="itemContainer" className="icon">
                        <Mail/>
                        <span>syahril@mail.com</span>
                    </div>
                </div>
                
                <div className="right">
                    
                </div>
            </div>
        </div>
    )
}
