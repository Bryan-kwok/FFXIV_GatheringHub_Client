import { Component } from "react";
import "./ModalCreateEvent.scss";

class ModalCreateEvent extends Component{

    

    state={
        filterModalKeys: ["expansion","type"],
        filterModalExpansion: ["A Realm Reborn"],
        filterModalType: ["Dungeons"]
    }

    changeExpansion = (event)=>{
        let expansion = event.target.value;
        let arr = [];
        arr.push(expansion)

        this.setState({
            filterModalExpansion: arr
        })
    }

    changeType = (event)=>{
        let type = event.target.value;
        let arr = [];
        arr.push(type)

        this.setState({
            filterModalType: arr
        })
    }


    filterByContent = ()=>{
        let keys = [...this.state.filterModalKeys]
        let value = [...this.state.filterModalExpansion,...this.state.filterModalType]

        let results = this.props.instanceDetails.filter(instance=>{
            return keys.every(key=>{
                return value.includes(instance[key])
            })
        })
        return results
    }

    updateModalFilters = (parameters,checked)=>{

        if(checked){
          this.setState({
            filterModalKeys: [...this.state.filterModalKeys,parameters[0]],
            filterModalValues: [...this.state.filterModalValues,parameters[1]]
          })
          
        }else if (!checked){
          let keys = [...this.state.filterModalKeys];
          let values = [...this.state.filterModalValues];
    
          const indexKeys = keys.indexOf(parameters[0]);
          const indexValues = values.indexOf(parameters[1]);
    
          if(indexKeys>-1){
             keys.splice(indexKeys,1)
          }
          if(indexValues>-1){
             values.splice(indexValues,1)
          }
    
          this.setState({
            filterModalKeys: keys,
            filterModalValues: values
          })
        }
      }

    render(){
        if(!this.props.showModalCreateEvent){
            return null
        }

        return(
            <div className="modalCreateEvent">
                <div className="modalCreateEvent__container">
                    <form className="modalCreateEvent__form">
                        <div className="modalCreateEvent__expansions">
                            <h2 className="modalCreateEvent__title">Filter Options</h2>
                            <div className="modalCreateEvent__menuContainers">
                                <select className="modalCreateEvent__selectMenu" name="Expansions" placeholder="Select Expansion" onChange={this.changeExpansion}>
                                    {/* <option value="" disabled selected>Select Expansion</option> */}
                                    <option value="A Realm Reborn">A Realm Reborn</option>
                                    <option value="Heavensward">Heavensward</option>
                                    <option value="Stormblood">Stormblood</option>
                                    <option value="Shadowbringers">Shadowbringers</option>
                                    <option value="Endwalker">Endwalker</option>
                                </select>
                                <select className="modalCreateEvent__selectMenu" name="Type" placeholder="Select Type of Content" onChange={this.changeType}>
                                    {/* <option value="" disabled selected>Select Type of Content</option> */}
                                    <option value="Dungeons">Dungeons</option>
                                    <option value="Trials">Trials</option>
                                    <option value="Raids">Raids</option>
                                    <option value="Treasure Hunts">Treasure Hunts</option>
                                    <option value="Deep Dungeons">Deep Dungeons</option>
                                </select>
                            </div>
                            <div className="modalCreateEvent__displayContent">
                                {this.filterByContent().map((instance)=>(
                                    <li className="sort__instance" key={instance.id}>
                                        <input className="sort__checkbox" type="checkbox" name={`name__${instance.name}`} /><label for="">{instance.name}</label>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </form>
                    <div className="modalCreateEvent__footer">
                        <button onClick={this.props.handleModalCreateEvent}>Cancel</button>
                    
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ModalCreateEvent;