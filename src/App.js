import { Component } from 'react';
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import './style/global.scss';
import axios from 'axios';
import characterData from "./data/character.json";
import Header from './components/Header/Header';
import RaidList from "./pages/RaidList/RaidList";
import Footer from './components/Footer/Footer';




class App extends Component {
  state ={
    avatar: characterData.Character.Avatar,
    charName: characterData.Character.Name,
    instanceDetails: null,
    activeContent: null,
    filterKeys: [],
    filterValues: [],
  }


  updateFilters = (parameters,checked)=>{

    if(checked){
      this.setState({
        filterKeys: [...this.state.filterKeys,parameters[0]],
        filterValues: [...this.state.filterValues,parameters[1]]
      })
      
    }else if (!checked){
      let keys = [...this.state.filterKeys];
      let values = [...this.state.filterValues];

      const indexKeys = keys.indexOf(parameters[0]);
      const indexValues = values.indexOf(parameters[1]);

      if(indexKeys>-1){
         keys.splice(indexKeys,1)
      }
      if(indexValues>-1){
         values.splice(indexValues,1)
      }

      this.setState({
        filterKeys: keys,
        filterValues: values
      })
    }
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
          <Route 
            path="/" 
            exact render={(props)=>(
              <RaidList 
                props={props} 
                instanceDetails={this.state.instanceDetails} 
                activeContent={this.state.activeContent}
                updateFilters={this.updateFilters}
                filterKeys = {this.state.filterKeys}
                filterValues = {this.state.filterValues}
                />
                
            )}
          />
        </Switch>
        <Footer/>
      </BrowserRouter>
    )
  }
  
}

export default App;

//(this.state.filteredContent)? this.state.filteredContent: this.state.activeContent