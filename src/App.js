import { useState } from 'react';
import './App.css';
import Saudacao from './Saudacao';
import SeuNome from './SeuNome';

function App() {

const [nome, setNome] =useState()
  return (
    <div className='App'>
      <h1>state lift</h1>
      <SeuNome setNome= {setNome}/>
      <Saudacao nome = {nome}/>
    </div>
  );
}
export default App;
