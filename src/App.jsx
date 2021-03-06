import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
// import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
//import { BrowserRouter as Router, Switch, route } from "react-router-dom";

import "./app.scss"
import {useState} from "react";

function App() {

  //set state for right side topbar
  const[menuOpen, setMenuOpen] = useState(false)

  const Home = () => {
    return (
      <div>Home</div>
    )
  }


  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        {/* <Testimonials /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
