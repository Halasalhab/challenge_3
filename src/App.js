import React, { Component } from 'react';
import {MultiStepForm} from './components/multy-forms-app'
var App =function () {
  // state={forms:[]};
  // ComponentDidMount(){
  //   fetch('/form')
  //   .then(res=>res.json())
  //   .then(forms=>this.setState({forms}))
  // }
 
  return (
    <div className="App">
    <MultiStepForm/>
    </div>
  );
  
}

export default App;
