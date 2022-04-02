import { Component } from "react";
import "./Dungeon_Sort.scss";
import Instance_List from "./Instance_List/Instance_List";

class Dungeon_Sort extends Component{
    state={
        isVisible: false,
        isVisible_ARR: false,
        isVisible_Heavensward: false,
        isVisible_Stormblood: false,
        isVisible_Shadowbringers: false,
        isVisible_Endwalker: false
    }

    data = this.props.instanceDetails;

    filterByDungeon = (expansion)=>{
        let keys = ["expansion","type"]
        let value = [expansion,"Dungeons"]

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

    handleVisible_dungeon_ARR = ()=>{
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

    handleVisible_dungeon_Heavensward = ()=>{
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

    handleVisible_dungeon_Stormblood = ()=>{
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

    handleVisible_dungeon_Shadowbringers = ()=>{
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

    handleVisible_dungeon_Endwalker = ()=>{
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
                <h2 className="sort__title" onClick={this.handleVisible}>Dungeons</h2>
                {this.state.isVisible &&
                    <ul className="sort__list">
                        <li className="sort__expansions" key={"sortDungeon__ARR"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_dungeon_ARR}>A Realm Reborn</h3></li>
                            {this.state.isVisible_ARR && this.filterByDungeon("A Realm Reborn").map((instance)=>(<Instance_List instance={instance} />))}
                        <li className="sort__expansions" key={"sortDungeon__Heavensward"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_dungeon_Heavensward}>Heavensward</h3></li>
                            {this.state.isVisible_Heavensward && this.filterByDungeon("Heavensward").map((instance)=>(<Instance_List instance={instance} />))}
                        <li className="sort__expansions" key={"sortDungeon__Stormblood"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_dungeon_Stormblood}>Stormblood</h3></li>
                            {this.state.isVisible_Stormblood && this.filterByDungeon("Stormblood").map((instance)=>(<Instance_List instance={instance} />))}
                        <li className="sort__expansions" key={"sortDungeon__Shadowbringers"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_dungeon_Shadowbringers}>Shadowbringers</h3></li>
                            {this.state.isVisible_Shadowbringers && this.filterByDungeon("Shadowbringers").map((instance)=>(<Instance_List instance={instance} />))}
                        <li className="sort__expansions" key={"sortDungeon__Endwalker"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_dungeon_Endwalker}>Endwalker</h3></li>
                            {this.state.isVisible_Endwalker && this.filterByDungeon("Endwalker").map((instance)=>(<Instance_List instance={instance} />))}   
                    </ul>   
                }
            </div>
        )
    }
}

export default Dungeon_Sort;