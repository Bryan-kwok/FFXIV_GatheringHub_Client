import { Component } from "react";
import "./ContentDisplay.scss";
import ContentCards from "./ContentCards/ContentCards";
import Searchbar from "./Searchbar/Searchbar";

class ContentDisplay extends Component{

    data = this.props.activeContent


    render(){
        console.log(this.data)
        return(
            <div className="contentDisplay__container">
                <Searchbar data={this.data} />
                <div className="contentCards__wrapper">
                    {this.data.map(instance=>(<ContentCards instance={instance}/>))}                 
                </div>

            </div>
        )
    }
}

export default ContentDisplay;