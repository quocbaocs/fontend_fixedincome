import React, {Component} from 'react';
import './App.css';
import TreasuryYieldList from './components/treaty_yeld_list'
class App extends Component{
  state={
    api : [] 
  }
  componentDidMount(){
    fetch('http://127.0.0.1:8000/bondapi/apibond/',{
      method:'GET',
      headers:{
        'Authorization': 'Token a583a1072317997163a008ff21f3d40c51b06c61'
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
