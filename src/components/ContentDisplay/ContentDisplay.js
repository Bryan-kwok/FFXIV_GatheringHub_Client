import { Component } from "react";
import "./ContentDisplay.scss";
import ContentCards from "./ContentCards/ContentCards";
import Searchbar from "./Searchbar/Searchbar";

function ContentDisplay (props){

    const data = props.activeContent

    const keys = props.filterKeys;
    const values = props.filterValues;



    
        return(
            <div className="contentDisplay__container">
                <Searchbar data={data} />
                <div className="contentCards__wrapper">
                    {data
                    .filter(instance=>{
                        return keys.every(key=>{
                            return values.includes(instance[key])
                        })
                    })
                    .map(instance=>(<ContentCards instance={instance}/>))}                 
                </div>

            </div>
        )
    
}

export default ContentDisplay;