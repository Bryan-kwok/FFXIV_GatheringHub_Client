import { Component } from "react";
import "./Searchbar.scss";
import ModalCreateEvent from "../../Modal/ModalCreateEvent/ModalCreateEvent";

class Searchbar extends Component{

    data = this.props.data;
    

    render(){
        return(
            <div>
                <div className="searchBar__container">
                    <label className="searchBar__counter">Current Number of active events are: {this.data.length}</label>
                    <textarea className="searchBar__inputArea" placeholder="Filter search..." name="searchBox" type="text" ></textarea>
                    <button className="searchBar__button" type="submit" onClick={this.props.handleModalCreateEvent}>+ Create Event</button>
                </div>
                <div>
                    <ModalCreateEvent 
                        showModalCreateEvent={this.props.showModalCreateEvent} 
                        handleModalCreateEvent={this.props.handleModalCreateEvent}
                        instanceDetails={this.props.instanceDetails}
                        
                        />
                </div>
            </div>
        )
    }
}

export default Searchbar;