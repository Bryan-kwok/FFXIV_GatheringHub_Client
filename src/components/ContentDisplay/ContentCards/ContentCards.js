import { Component } from "react";
import "./ContentCards.scss";
import allRounder from "../../../assets/FFXIVIcons JobIcons/All_Rounder.png"
import JobList from "./JobList/JobList";

class ContentCards extends Component{
    
    timeConverter = (timestamp)=>{
        let thedate = new Date(timestamp);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let days = ['Mon',"Tues","Wed","Thurs","Fri","Sat","Sun"]

        let month = months[thedate.getMonth()];
        let day = days[thedate.getDay()];
        let hours = thedate.toLocaleTimeString();
        let date = thedate.getDate();

        let time = month + " " + day + " " + date + " , "+ hours

        return time

    }
    


    render(){
        const {id,cardID,name,image,
            itemLevelRequired,expansion,
            type,timeStart,timeEnd,
            leader,isBeginnerFriendly,
            jobRoles} = this.props.instance;
        return(
            <div className="card__container">
                <div className="card__nameJobsWrapper">
                    <div className="card__header">
                        <h3 className="card__title">{name}</h3>
                        <div className="card__badges">
                            {isBeginnerFriendly && 
                            <img className="card__tag-sprout" src="../assets/FFXIVIcons JobIcons/Sprout.png" alt="new player tag" />}
                        </div>
                    </div>
                    <img className="card__backgroundImage" src={image} />
                    
                </div>
                <div className="card__timeWrapper">
                    <div className="card__partySetting">
                        <h3 className="card__leader">Leader: {leader}</h3>
                        <label className="card__partyLabel">Party</label>
                        <div className="card__jobContainer">
                            {Object.entries(jobRoles).map(role=>(<JobList role={role} />))}
                        </div>
                    </div>
                    <div className="card__timeSetting">
                        <div className="card__startWrapper">
                            <img className="card__timer-start" src="../assets/FFXIVIcons JobIcons/timer.png" />
                            <h3 className="card__timeStart">Start: {this.timeConverter(timeStart)}</h3>
                        </div>
                        <div className="card__stopWrapper">
                            <img className="card__timer-end" src="../assets/FFXIVIcons JobIcons/timer.png" />
                            <h3 className="card__timeStop">Stop: {this.timeConverter(timeEnd)} </h3>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default ContentCards