import { Component } from 'react';
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import './style/global.scss';
import characterData from "./data/character.json";
import Header from './components/Header/Header';
import RaidList from "./pages/RaidList/RaidList";
import axios from 'axios';



class App extends Component {
  state ={
    avatar: characterData.Character.Avatar,
    charName: characterData.Character.Name,
    instanceDetails: null,
    activeContent: null,
    filterKeys: [],
    filterValues: []
  }

  updateFilters = ()=>{
    
  }

  getAllInstances = ()=>{
    axios
      .get("http://localhost:8080/instanceDetails")
      .then(response=>{
        this.setState({
          instanceDetails: response.data
        });
      })
      .catch(err=>{console.log(err)})
  }

  filterContent = ()=>{

  }

  getActiveContent = ()=>{
    axios
      .get("http://localhost:8080/activeContent")
      .then(response=>{
        this.setState({
          activeContent: response.data
        });
      })
      .catch(err=>{console.log(err)})
  }

  componentDidMount(){
    
    this.getAllInstances();

    this.getActiveContent();
    
  }



  render(){
    if(this.state.instanceDetails===null || this.state.activeContent===null){
      return <main>Loading...</main>
    }
    return(
      
      <BrowserRouter>
        <Header avatar = {this.state.avatar} charName ={this.state.charName}/>
        <Switch>
          <Route path="/" exact render={(props)=>(<RaidList props={props} instanceDetails={this.state.instanceDetails} activeContent={this.state.activeContent}/>)}/>
        </Switch>
      </BrowserRouter>
    )
  }
  
}

export default App;
