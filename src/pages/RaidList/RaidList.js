import { Component } from "react";
import "./RaidList.scss";
import SideNav from "../../components/SideNav/SideNav";
import ContentDisplay from "../../components/ContentDisplay/ContentDisplay";

class RaidList extends Component{
    

    render(){
        return(
            
            <div className="raidPage__container">
                <SideNav instanceDetails={this.props.instanceDetails} updateFilters={this.props.updateFilters}/>
                <ContentDisplay 
                    activeContent={this.props.activeContent} 
                    filterKeys = {this.props.filterKeys} 
                    filterValues={this.props.filterValues}
                    showModalCreateEvent = {this.props.showModalCreateEvent}
                    handleModalCreateEvent = {this.props.handleModalCreateEvent}
                    instanceDetails={this.props.instanceDetails}
                    
                    />


            </div>
        )
    }
}


export default RaidList;