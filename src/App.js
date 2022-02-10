import './App.css';
import Form from "./Form";
import Busqueda from './Busqueda';
import React from 'react';

export default class App extends React.Component {
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Formulario en React.
        </p>
        <fieldset><legend>Datos Personales</legend><Form /> </fieldset>      
        <fieldset><legend>Consulta</legend><Busqueda /></fieldset>    
      </header>
    </div>
  );
}
}
