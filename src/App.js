import { Component } from 'react';
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import './App.scss';
import characterData from "./data/character.json";
import Header from './components/Header/Header';
import RaidList from "./pages/RaidList/RaidList";
import axios from 'axios';


class App extends Component {
  state ={
    avatar: characterData.Character.Avatar,
    charName: characterData.Character.Name,
    instanceDetails: null
  }

  componentDidMount(){
    axios
      .get("http://localhost:8080/instanceDetails")
      .then(response=>{
        this.setState({
          instanceDetails: response.data
        });
        // console.log(this.state.instanceDetails)
      })
      .catch(err=>{console.log(err)})
  }


  render(){
    if(this.state.instanceDetails===null){
      return <main>Loading...</main>
    }
    return(
      
      <BrowserRouter>
        <Header avatar = {this.state.avatar} charName ={this.state.charName}/>
        <Switch>
          <Route path="/" exact render={(props)=>(<RaidList props={props} instanceDetails={this.state.instanceDetails} />)}/>
        </Switch>
      </BrowserRouter>
      // <div>
      //   <img src={this.state.avatar} />
      //   <h1>{this.state.charName}</h1>
      // </div>
    )
  }
  
}

export default App;
