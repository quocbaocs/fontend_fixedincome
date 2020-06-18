import React, {Component} from 'react';
import './App.css';
import TreasuryYieldList from './components/treaty_yeld_list'
class App extends Component{
  state={
    api : [] 
  }
  componentDidMount(){
    fetch('https://djangoappjson.herokuapp.com/fixincome/apibond/',{
      method:'GET',
      headers:{
        'Authorization': 'Token 7c2537cd132bc08f54fed1811e5abecb6e0c59b8'
      }
    }).then( resp =>resp.json())
    .then( res => this.setState({api: res}))
    .catch( error => console.log(error))
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Treasury Yield : Tiền lời</h1>
          <TreasuryYieldList api={this.state.api}/>
        </header>
      </div>
    );
  }
  
}

export default App;
