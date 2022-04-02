import { Component } from "react";
import "./RaidList.scss";
import SideNav from "../../components/SideNav/SideNav";

class RaidList extends Component{
    
    render(){
        // const instanceDetails = this.props.instanceDetails;
        // console.log(this.props.instanceDetails)
        return(
            
            <div>
                <SideNav instanceDetails={this.props.instanceDetails}/>


            </div>
        )
    }
}


export default RaidList;