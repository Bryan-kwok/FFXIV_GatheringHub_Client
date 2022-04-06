import "./JobList.scss";

function JobList(props){
    return(
        <img className="card__jobRoles" src={`../assets/FFXIVIcons JobIcons/${props.role[1]}.png`} alt="tank role, or all rounder" />
    )
}

export default JobList;