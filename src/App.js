

import './App.css';
import Hello from './components/Hello';
import React, { Component } from 'react';
//import {createStore} from 'readux';
import { createStore } from "redux"; 
// import reducer from './Reducers/Reducer1'
import reducer from './Reducers/Reducer1'
import store from './Stores/Store'
import addArticle from './Actions/Action1'
import ThxWraper from './components/ThxWraper';
//import { Provider } from 'react-redux';


// const initialState = { tech: "React " };
// const store = createStore(reducer, initialState);
//const store = createStore(reducer);


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      
    }
  }
  testDispath = () => {
    console.log(store.getState());
    store.dispatch(addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );
  }
  
  render() {
    return (
      // <div>
      //   <Hello />
      //   <button onClick={this.testDispath}>AAAA</button>
      // </div>
      <div>
        <ThxWraper />
      </div>
    )
  }
}