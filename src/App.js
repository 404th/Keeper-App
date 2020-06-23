import './App.css';
import React from 'react';
import { Header } from './components/Header'
import { Middle } from "./components/Middle"
import { observer } from "mobx-react"

function _App() {

  return(
    <div className={ "App" }>
      <Header />
      <Middle />
    </div>
  );

}

export let App = observer( _App )