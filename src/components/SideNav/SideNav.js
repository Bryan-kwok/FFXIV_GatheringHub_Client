import { Component } from "react";
import "./SideNav.scss"
import Expansion_Sort from "./Expansion_sort/Expansion_sort";
import Dungeon_Sort from "./Dungeon_sort/Dungeon_Sort";

class SideNav extends Component{
    render(){
        // console.log(this.props.instanceDetails)

        // const {instanceDetails} = this.props.instanceDetails;

        return(
            <div className="sideNav__container">
                <h2 className="sideNav__title">Search Options</h2>
                <Expansion_Sort/>
                <Dungeon_Sort instanceDetails={this.props.instanceDetails}/>
            </div>


        )
    }
}

export default SideNav;