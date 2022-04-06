import "./Deepdungeon_sort.scss";
import Instance_List from "../Dungeon_sort/Instance_List/Instance_List";
import { Component } from "react";
import deepdungeon_icon from "../../../assets/deepdungeons_icon.png"

class Deepdungeon_sort extends Component{
    state={
        isVisible: false,
        isVisible_ARR: false,
        isVisible_Heavensward: false,
        isVisible_Stormblood: false,
        isVisible_Shadowbringers: false,
        isVisible_Endwalker: false
    }

    data = this.props.instanceDetails;

    filterByDeepDungeon = (expansion)=>{
        let keys = ["expansion","type"]
        let value = [expansion,"Deep Dungeons"]

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

    handleVisible_deepdungeon_ARR = ()=>{
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

    handleVisible_deepdungeon_Heavensward = ()=>{
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

    handleVisible_deepdungeon_Stormblood = ()=>{
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

    handleVisible_deepdungeon_Shadowbringers = ()=>{
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

    handleVisible_deepdungeon_Endwalker = ()=>{
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
                    <img className="sort__icon" src={deepdungeon_icon} />
                    <h2 className="sort__title" onClick={this.handleVisible}>Deep Dungeons</h2>
                </div>
                {this.state.isVisible &&
                    <ul className="sort__list">
                        <li className="sort__expansions" key={"sortdeepDungeon__Heavensward"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_deepdungeon_Heavensward}>Heavensward</h3></li>
                            {this.state.isVisible_Heavensward && this.filterByDeepDungeon("Heavensward").map((instance)=>(<Instance_List instance={instance} />))}
                        <li className="sort__expansions" key={"sortdeepDungeon__Stormblood"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_deepdungeon_Stormblood}>Stormblood</h3></li>
                            {this.state.isVisible_Stormblood && this.filterByDeepDungeon("Stormblood").map((instance)=>(<Instance_List instance={instance} />))}
                        <li className="sort__expansions" key={"sortdeepDungeon__Shadowbringers"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_deepdungeon_Shadowbringers}>Shadowbringers</h3></li>
                            {this.state.isVisible_Shadowbringers && this.filterByDeepDungeon("Shadowbringers").map((instance)=>(<Instance_List instance={instance} />))}
                        <li className="sort__expansions" key={"sortdeepDungeon__Endwalker"}><h3 className="sort__expansionTitle" onClick={this.handleVisible_deepdungeon_Endwalker}>Endwalker</h3></li>
                            {this.state.isVisible_Endwalker && this.filterByDeepDungeon("Endwalker").map((instance)=>(<Instance_List instance={instance} />))}   
                    </ul>   
                }
            </div>
        )
    }
}

export default Deepdungeon_sort;