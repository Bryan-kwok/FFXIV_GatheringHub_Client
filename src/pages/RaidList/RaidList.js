import { Component } from "react";
import "./RaidList.scss";
import SideNav from "../../components/SideNav/SideNav";
import ContentDisplay from "../../components/ContentDisplay/ContentDisplay";

class RaidList extends Component{
    

    render(){
        // const instanceDetails = this.props.instanceDetails;
        console.log(this.props.instanceDetails)
        console.log(this.props.activeContent)
        return(
            
            <div className="raidPage__container">
                <SideNav instanceDetails={this.props.instanceDetails}/>
                <ContentDisplay activeContent={this.props.activeContent}/>


            </div>
        )
    }
}


export default RaidList;