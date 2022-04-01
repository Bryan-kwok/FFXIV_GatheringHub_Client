import "Expansion_Sort.scss";
import { Component } from "react";

class Expansion_Sort extends Component{
    state={
        isVisible: false
    }
    render(){
        return(
            <div className="sort__container">
                <h2 className="sort__title">Expansion</h2>
                <ul className="sort__list">
                    <li className="sort__expansions"><input type="checkbox" name="check__Arr" /><label for="">A Realm Reborn</label></li>
                    <li className="sort__expansions"><input type="checkbox" name="check__Heavensward" /><label for="">Heavensward</label></li>
                    <li className="sort__expansions"><input type="checkbox" name="check__Stormblood" /><label for="">Stormblood</label></li>
                    <li className="sort__expansions"><input type="checkbox" name="check__Shadowbringers" /><label for="">Shadowbringers</label></li>
                    <li className="sort__expansions"><input type="checkbox" name="check__Endwalker" /><label for="">Endwalker</label></li>
                </ul>
            </div>
            
        )
    }
}

export default Expansion_Sort;