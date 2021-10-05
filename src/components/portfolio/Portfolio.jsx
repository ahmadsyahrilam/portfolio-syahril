import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { featuredPortfolio, webPortfolio, mobilePortfolio } from "../../data";

export default function Portfolio() {

    const [selected,setSelected] = useState("featured"); //to check which one of the menu is selected
    const [data,setData] = useState([]);

    //for select menu
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },

    ];

    useEffect(() => {

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;

            case "web":
                setData(webPortfolio);
                break;

            case "mobile":
                setData(mobilePortfolio);
                break;

                default:
                    setData(featuredPortfolio);
        }

    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {/* <li className="active">Featured</li>
                <li>Web App</li>
                <li>Mobile App</li> */}
                {list.map(item => (
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={ setSelected }
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(d => (

                    <div className="item">
                        <img src={d.img} alt={d.title} />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
