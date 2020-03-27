import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter:0,
      isError:false
    }
  }
  render(){
    let {counter, isError} = this.state;
    let errorClass = isError ? '' : 'hidden';
      return (
        <div data-test="component-app">
          <h1 data-test="counter-display">The counter is currently {counter}</h1>
          <button onClick={()=>{
            isError && this.setState({
              isError: false
            })

           !isError && this.setState({
              counter: counter + 1,
            })
          }} data-test="increnment-button">Increnment</button>

          <button onClick={()=>{
            counter>0 && this.setState({
              counter:   counter-1,
            } );

             counter<1  && this.setState({
                isError: true
              });
            
          }} data-test="decrement-button">Decrement</button> <br/>
           <p data-test="error-message" className={`error ${errorClass}`}>Counter value con't be less then 0</p> 
        </div>
      );
  }
}

export default App;