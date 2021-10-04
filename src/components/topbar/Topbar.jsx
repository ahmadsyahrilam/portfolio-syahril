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
                        <span>+60 11 2692 2538</span>
                    </div>

                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>ahmadsyahrilam@mail.com</span>
                    </div>
                </div>
                
                <div className="right">
                    
                </div>
            </div>
        </div>
    )
}
