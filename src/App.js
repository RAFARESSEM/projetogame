import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';
import './App.css';
import Navbar from './components/NavBar';
import AppRoutes from './main/AppRoutes';



export default class App extends React.Component{
  render() {
    return (
      <div className="App">
            <div>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <AppRoutes/>
            
            </div>    
      </div>
    );
  }
}
