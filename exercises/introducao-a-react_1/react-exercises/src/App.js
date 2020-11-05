import React from 'react';
import logo from './logo.svg';
import './App.css';

const commitmentsArray = ['Estudar jest', 'fazer projeto', 'assitir aula'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}


function App() {
  return (
    commitmentsArray.map(commitment => task(commitment))
  );
}

export default App;
