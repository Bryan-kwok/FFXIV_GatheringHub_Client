import "./Raids_sort.scss";
import Instance_List from "../Dungeon_sort/Instance_List/Instance_List";
import { Component } from "react";
import raidsIcon from "../../../assets/raid_icon.png"


class Raids_sort extends Component{
    state={
        isVisible: false,
        isVisible_ARR: false,
        isVisible_Heavensward: false,
        isVisible_Stormblood: false,
        isVisible_Shadowbringers: false,
        isVisible_Endwalker: false
    }

    data = this.props.instanceDetails;

    filterByRaids = (expansion)=>{
        let keys = ["expansion","type"]
        let value = [expansion,"Raids"]

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

    handleVisible_raid_ARR = ()=>{
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

    handleVisible_raid_Heavensward = ()=>{
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

    handleVisible_raid_Stormblood = ()=>{
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

    handleVisible_raid_Shadowbringers = ()=>{
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

    handleVisible_raid_Endwalker = ()=>{
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
                <div className="sort__titleIcon">
                    <img className="sort__icon" src={raidsIcon} />
                    <h2 className="sort__title" onClick={this.handleVisible}>Raids</h2>
                </div>
                {this.state.isVisible &&
                    <ul className="sort__list">
                        <li className="sort__expansions" key={"sortRaids__ARR"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_raid_ARR}>A Realm Reborn</h3></li>
                            {this.state.isVisible_ARR && this.filterByRaids("A Realm Reborn").map((instance)=>(<Instance_List instance={instance} checkValue={this.props.checkValue}/>))}
                        <li className="sort__expansions" key={"sortRaids__Heavensward"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_raid_Heavensward}>Heavensward</h3></li>
                            {this.state.isVisible_Heavensward && this.filterByRaids("Heavensward").map((instance)=>(<Instance_List instance={instance} checkValue={this.props.checkValue}/>))}
                        <li className="sort__expansions" key={"sortRaids__Stormblood"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_raid_Stormblood}>Stormblood</h3></li>
                            {this.state.isVisible_Stormblood && this.filterByRaids("Stormblood").map((instance)=>(<Instance_List instance={instance} checkValue={this.props.checkValue}/>))}
                        <li className="sort__expansions" key={"sortRaids__Shadowbringers"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_raid_Shadowbringers}>Shadowbringers</h3></li>
                            {this.state.isVisible_Shadowbringers && this.filterByRaids("Shadowbringers").map((instance)=>(<Instance_List instance={instance} checkValue={this.props.checkValue}/>))}
                        <li className="sort__expansions" key={"sortRaids__Endwalker"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_raid_Endwalker}>Endwalker</h3></li>
                            {this.state.isVisible_Endwalker && this.filterByRaids("Endwalker").map((instance)=>(<Instance_List instance={instance} checkValue={this.props.checkValue}/>))}   
                    </ul>   
                }
            </div>
        )
    }
}

export default Raids_sort;