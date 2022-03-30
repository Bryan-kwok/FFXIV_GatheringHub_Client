import { Component } from "react";
import "./SideNav.scss"

class SideNav extends Component{
    render(){
        return(
            <div className="sideNav__container">
                <h2 className="sideNav__title">Search Options</h2>
                <h3>Expansion</h3>
                <select className="search__expansion" name="search__expansion">
                    <option value="" disabled selected>Please Select</option>
                    <option value="ARR">A Realm Reborn</option>
                    <option value="Heavensward">Heavensward</option>
                    <option value="Stormblood">Stormblood</option>
                    <option value="Shadowbringers">Shadowbringers</option>
                    <option value="Endwalker">Endwalker</option>
                </select>
            </div>


        )
    }
}

export default SideNav;