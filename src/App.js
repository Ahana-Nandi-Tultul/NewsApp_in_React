import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent  from './components/NewsComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize=15;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
            <Switch>
            <Route exact path="/"><NewsComponent setProgress={this.setProgress}  key="home"  pageSize={this.pageSize} country={'in'} category={"general"}/></Route>
              {/* <Route exact path="/about" element={<About/>}/> */}
              <Route exact path="/business"><NewsComponent setProgress={this.setProgress}  key="business"  pageSize={this.pageSize} country={'in'} category={"business"}/></Route>
              <Route exact path="/entertainment"><NewsComponent setProgress={this.setProgress}  key="entertainment"  pageSize={this.pageSize} country={'in'} category={"entertainment"}/></Route>
              <Route exact path="/general"><NewsComponent setProgress={this.setProgress}  key="general"  pageSize={this.pageSize} country={'in'} category={"general"}/></Route>
              <Route exact path="/health"><NewsComponent setProgress={this.setProgress}   key="health"p ageSize={5} country={'in'} category={"health"}/></Route>
              <Route exact path="/science"><NewsComponent setProgress={this.setProgress}   key="science"p ageSize={5} country={'in'} category={"science"}/></Route>
              <Route exact path="/sports"><NewsComponent setProgress={this.setProgress}  key="sports"  pageSize={this.pageSize} country={'in'} category={"sports"}/></Route>
              <Route exact path="/technology"><NewsComponent setProgress={this.setProgress}  key="technology"  pageSize={this.pageSize} country={'in'} category={"technology"}/></Route>
              </Switch>
        </Router>
      </div>
    )
  }
}
// 5c8527750f1e4558a27ff4902f6a22ab
//https://newsapi.org/v2/top-headlines?apiKey=5c8527750f1e4558a27ff4902f6a22ab&q=cricket
