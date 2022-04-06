import { Component } from "react";
import "./SideNav.scss"
import Expansion_Sort from "./Expansion_sort/Expansion_sort";
import Dungeon_Sort from "./Dungeon_sort/Dungeon_Sort";
import Trials_sort from "./Trials_sort/Trials_sort";
import Raids_sort from "./Raids_sort/Raids_sort";
import Treasure_sort from "./Treasure_sort/Treasure_sort";
import Deepdungeon_sort from "./Deepdungeon_sort/Deepdungeon_sort";

class SideNav extends Component{

    checkValue = (event)=>{
        console.log(event)
    }


    render(){

        return(
            <form className="sideNav__container" id="sideNav__form">
                <h2 className="sideNav__title">Search Options</h2>
                <Expansion_Sort checkValue={this.checkValue} />
                <Dungeon_Sort instanceDetails={this.props.instanceDetails} />
                <Trials_sort instanceDetails={this.props.instanceDetails}/>
                <Raids_sort instanceDetails={this.props.instanceDetails}/>
                <Treasure_sort instanceDetails={this.props.instanceDetails}/>
                <Deepdungeon_sort instanceDetails={this.props.instanceDetails}/>

            </form>


        )
    }
}

export default SideNav;