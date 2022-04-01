import { Component } from "react";
import "./SideNav.scss"
import Expansion_Sort from "./Expansion_sort/Expansion_sort";

class SideNav extends Component{
    render(){
        return(
            <div className="sideNav__container">
                <h2 className="sideNav__title">Search Options</h2>
                <Expansion_Sort/>
            </div>


        )
    }
}

export default SideNav;