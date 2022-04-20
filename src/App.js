
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';

export default class App extends Component {
  c="Ahana";
  render() {
    return (
      <div>
        <Navbar/>
        <NewsComponent pageSize={5}/>
      </div>
    )
  }
}
// 5c8527750f1e4558a27ff4902f6a22ab
//https://newsapi.org/v2/top-headlines?apiKey=5c8527750f1e4558a27ff4902f6a22ab&q=cricket
