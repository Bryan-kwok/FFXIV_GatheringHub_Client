import { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

class Header extends Component{
    render(){
        return(
            <div className="header__container">
                <Link className="header__title-wrapper">
                    <h1 className="header__title">FFXIV Gathering Hub</h1>
                </Link>
                <Link className="header__raidList">
                    <h2>Raid List</h2>
                </Link>
                <Link className="header__calender">
                    <h2>Calender</h2>
                </Link>
                <Link className="header__contactMe">
                    <h2>Contact Me</h2>
                </Link>
                <div className="header__loginSection">
                    <h2 className="header__charName">{this.props.charName}</h2>
                    <img className="header__avatar" src={this.props.avatar} />
                </div>

            </div>
        )
    }
}

export default Header;