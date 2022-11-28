import "./Expansion_Sort.scss";
import { Component } from "react";

class Expansion_Sort extends Component{
    state={
        isVisible: true
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

    render(){
        return(
            <div className="sort__container">
                <h2 className="sort__title" onClick={this.handleVisible}>Expansion</h2>
                {this.state.isVisible &&
                    <ul className="sort__list">
                    <li className="sort__expansions"><input className="sort__checkbox" type="checkbox" name="expansion__A Realm Reborn" onChange={this.props.checkValue}/><label for="">A Realm Reborn</label></li>
                    <li className="sort__expansions"><input className="sort__checkbox" type="checkbox" name="expansion__Heavensward" onChange={this.props.checkValue}/><label for="">Heavensward</label></li>
                    <li className="sort__expansions"><input className="sort__checkbox" type="checkbox" name="expansion__Stormblood" onChange={this.props.checkValue}/><label for="">Stormblood</label></li>
                    <li className="sort__expansions"><input className="sort__checkbox" type="checkbox" name="expansion__Shadowbringers" onChange={this.props.checkValue}/><label for="">Shadowbringers</label></li>
                    <li className="sort__expansions"><input className="sort__checkbox" type="checkbox" name="expansion__Endwalker" onChange={this.props.checkValue}/><label for="">Endwalker</label></li>
                </ul>
                }
                
            </div>
            
        )
    }
}

export default Expansion_Sort;