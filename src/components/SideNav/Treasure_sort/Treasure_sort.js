import "./Treasure_sort.scss";
import Instance_List from "../Dungeon_sort/Instance_List/Instance_List";
import { Component } from "react";

class Treasure_sort extends Component{
    state={
        isVisible: false,
        isVisible_ARR: false,
        isVisible_Heavensward: false,
        isVisible_Stormblood: false,
        isVisible_Shadowbringers: false,
        isVisible_Endwalker: false
    }

    data = this.props.instanceDetails;

    filterByTreasureHunt = (expansion)=>{
        let keys = ["expansion","type"]
        let value = [expansion,"Treasure Hunt"]

        let results = this.data.filter(instance=>{
            return keys.every(key=>{
                return value.includes(instance[key])
            })
        })
        return results
    }
    


    handleVisible = ()=>{
        if(this.state.isVisible){
            this.setState({
                isVisible: false
            })
        }else if(!this.state.isVisible){
            this.setState({
                isVisible: true
            })
        }
    }

    handleVisible_treasureHunt_ARR = ()=>{
        if(this.state.isVisible_ARR){
            this.setState({
                isVisible_ARR: false
            })
        }else if(!this.state.isVisible_ARR){
            this.setState({
                isVisible_ARR: true
            })
        }
    }

    handleVisible_treasureHunt_Heavensward = ()=>{
        if(this.state.isVisible_Heavensward){
            this.setState({
                isVisible_Heavensward: false
            })
        }else if(!this.state.isVisible_Heavensward){
            this.setState({
                isVisible_Heavensward: true
            })
        }
    }

    handleVisible_treasureHunt_Stormblood = ()=>{
        if(this.state.isVisible_Stormblood){
            this.setState({
                isVisible_Stormblood: false
            })
        }else if(!this.state.isVisible_Stormblood){
            this.setState({
                isVisible_Stormblood: true
            })
        }
    }

    handleVisible_treasureHunt_Shadowbringers = ()=>{
        if(this.state.isVisible_Shadowbringers){
            this.setState({
                isVisible_Shadowbringers: false
            })
        }else if(!this.state.isVisible_Shadowbringers){
            this.setState({
                isVisible_Shadowbringers: true
            })
        }
    }

    handleVisible_treasureHunt_Endwalker = ()=>{
        if(this.state.isVisible_Endwalker){
            this.setState({
                isVisible_Endwalker: false
            })
        }else if(!this.state.isVisible_Endwalker){
            this.setState({
                isVisible_Endwalker: true
            })
        }
    }

    render(){
        
        return(
            <div className="sort__container">
                <h2 className="sort__title" onClick={this.handleVisible}>Treasure Hunt</h2>
                {this.state.isVisible &&
                    <ul className="sort__list">
                        <li className="sort__expansions" key={"sortTreasureHunt__Heavensward"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_treasureHunt_Heavensward}>Heavensward</h3></li>
                            {this.state.isVisible_Heavensward && this.filterByTreasureHunt("Heavensward").map((instance)=>(<Instance_List instance={instance} />))}
                        <li className="sort__expansions" key={"sortTreasureHunt__Stormblood"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_treasureHunt_Stormblood}>Stormblood</h3></li>
                            {this.state.isVisible_Stormblood && this.filterByTreasureHunt("Stormblood").map((instance)=>(<Instance_List instance={instance} />))}
                        <li className="sort__expansions" key={"sortTreasureHunt__Shadowbringers"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_treasureHunt_Shadowbringers}>Shadowbringers</h3></li>
                            {this.state.isVisible_Shadowbringers && this.filterByTreasureHunt("Shadowbringers").map((instance)=>(<Instance_List instance={instance} />))}
                        <li className="sort__expansions" key={"sortTreasureHunt__Endwalker"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_treasureHunt_Endwalker}>Endwalker</h3></li>
                            {this.state.isVisible_Endwalker && this.filterByTreasureHunt("Endwalker").map((instance)=>(<Instance_List instance={instance} />))}   
                    </ul>   
                }
            </div>
        )
    }
}

export default Treasure_sort;