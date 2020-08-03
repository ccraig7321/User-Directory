import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import EmployeeTable from "./EmployeeTable"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get("https://randomuser.me/api/?results=200&nat=us")
    .then (response => {
      this.setState({data: response.data})
    })
  }

  render(){
    return (
      // MY HTML FOR PAGE (MY REACT COMPONENTS)
      <div>
        <EmployeeTable employees={this.state.data} />  
      </div>
    );
  }
}

export default App;
