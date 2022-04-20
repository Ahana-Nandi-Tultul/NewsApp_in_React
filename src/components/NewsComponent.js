import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItems'

export class NewsComponent extends Component {
  constructor(params) {
    super();
    console.log("Hello I am a constructor");
    this.state={
      articles : [],
      loading :false,
      page: 1
    };
  }
 async componentDidMount(){
    console.log("cdm");
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5c8527750f1e4558a27ff4902f6a22ab&page=1&pageSize=20`;
    let data=await fetch(url);
    let parseData= await data.json()
    console.log(parseData)
    this.setState({articles:parseData.articles, totalResults:parseData.totalResults})
  }
  handlePreviousClick=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5c8527750f1e4558a27ff4902f6a22ab&page=${this.state.page -1}&pageSize=20`;
    let data=await fetch(url);
    let parseData= await data.json()
    console.log(parseData)

    this.setState({
      page:this.state.page-1,
      articles:parseData.articles
    });
    console.log(this.state.page)
  }
   handleNextClick=async ()=>{
     if((this.state.page +1)>Math.ceil(this.state.totalResults/20)){
        this.setState({
          disabled:1
        })
     }
     else{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5c8527750f1e4558a27ff4902f6a22ab&page=${this.state.page +1}&pageSize=20`;
    let data=await fetch(url);
    let parseData= await data.json()
    console.log(parseData)
    

    this.setState({
      page:this.state.page+1,
      articles:parseData.articles
    });
  }
    console.log(this.state.page)
  }
  render() {
    return (
      
       <div className="container my-3">
         <h2>News App - Top Headlines</h2>
         <div className="row">
         {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage}
            newsUrl={element.url}/>
        </div>
         })}
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.disabled===1} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
      </div>
    )
  }
}

export default NewsComponent
