import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import characterData from "./data/character.json";
import Header from './components/Header/Header';

class App extends Component {
  state ={
    avatar: characterData.Character.Avatar,
    charName: characterData.Character.Name
  }
  render(){
    return(
      <BrowserRouter>
        <Header avatar = {this.state.avatar} charName ={this.state.charName}/>
      </BrowserRouter>
      // <div>
      //   <img src={this.state.avatar} />
      //   <h1>{this.state.charName}</h1>
      // </div>
    )
  }
  
}

export default App;
