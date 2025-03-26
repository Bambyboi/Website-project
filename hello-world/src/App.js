import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Hello2 from './components/Hello';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet name='Samuel' heroName='Aquaman'/>
        <Greet name='Jessop' heroName='Spiderman'/>
        <Greet name='Kaleopa' heroName='Ladyboy'/>

        {/* <Welcome /> 
        <Hello /> */}
   
      </div>
    )
  }
}

export default App;
