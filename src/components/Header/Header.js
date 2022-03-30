import { Component } from "react";
import "./Header.scss"

class Header extends Component{
    render(){
        return(
            <div className="header__container">
                <div className="header__title-wrapper">
                    <h1 className="header__title">FFXIV Gathering Hub</h1>
                </div>
                <div className="header__loginSection">
                    <h2 className="header__charName">{this.props.charName}</h2>
                    <img className="header__avatar" src={this.props.avatar} />
                </div>

            </div>
        )
    }
}

export default Header;