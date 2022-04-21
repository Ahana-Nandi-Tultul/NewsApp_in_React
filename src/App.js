
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
            <Switch>
              {/* <Route exact path="/about" element={<About/>}/> */}
              <Route exact path="/business"><NewsComponent key="business"  pageSize={5} country={'in'} category={"business"}/></Route>
              <Route exact path="/entertainment"><NewsComponent key="entertainment"  pageSize={5} country={'in'} category={"entertainment"}/></Route>
              <Route exact path="/general"><NewsComponent key="general"  pageSize={5} country={'in'} category={"general"}/></Route>
              <Route exact path="/health"><NewsComponent  key="health"p ageSize={5} country={'in'} category={"health"}/></Route>
              <Route exact path="/science"><NewsComponent  key="science"p ageSize={5} country={'in'} category={"science"}/></Route>
              <Route exact path="/sports"><NewsComponent key="sports"  pageSize={5} country={'in'} category={"sports"}/></Route>
              <Route exact path="/technology"><NewsComponent key="technology"  pageSize={5} country={'in'} category={"technology"}/></Route>
              </Switch>
        </Router>
      </div>
    )
  }
}
// 5c8527750f1e4558a27ff4902f6a22ab
//https://newsapi.org/v2/top-headlines?apiKey=5c8527750f1e4558a27ff4902f6a22ab&q=cricket
