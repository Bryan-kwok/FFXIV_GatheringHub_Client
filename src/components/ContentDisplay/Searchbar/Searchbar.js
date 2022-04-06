import { Component } from "react";
import "./Searchbar.scss";

class Searchbar extends Component{

    data = this.props.data;

    render(){
        return(
            <div className="searchBar__container">
                <label className="searchBar__counter">Current Number of active events are: {this.data.length}</label>
                <textarea className="searchBar__inputArea" placeholder="Filter search..." name="searchBox" type="text" ></textarea>
                <button className="searchBar__button" type="submit">+ Create Event</button>
                
            </div>
        )
    }
}

export default Searchbar;