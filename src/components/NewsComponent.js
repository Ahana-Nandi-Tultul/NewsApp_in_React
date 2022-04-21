import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItems'
import Spinner from './spinner';

export class NewsComponent extends Component {
  static defaultProps={
    country:"in",
    pageSize: 8,
    category: 'general'

  }
  static propTypes={
    country:PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string
  }
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
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c8527750f1e4558a27ff4902f6a22ab&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parseData= await data.json()
    console.log(parseData)
    this.setState({articles:parseData.articles, 
      totalResults:parseData.totalResults,
      loading:false
    })
  }
  handlePreviousClick=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c8527750f1e4558a27ff4902f6a22ab&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parseData= await data.json()
    console.log(parseData)

    this.setState({
      page:this.state.page-1,
      articles:parseData.articles,
      loading:false
    });
    console.log(this.state.page)
  }
   handleNextClick=async ()=>{
     if((this.state.page +1)>Math.ceil(this.state.totalResults/this.props.pageSize)){
        this.setState({
          disabled:1
        })
     }
     else{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c8527750f1e4558a27ff4902f6a22ab&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parseData= await data.json()
    console.log(parseData)
    

    this.setState({
      page:this.state.page+1,
      articles:parseData.articles,
      loading:false
    });
  }
    console.log(this.state.page)
  }
  render() {
    return (
      
       <div className="container my-3">
         <h1 className="text-center" style={{margin:'35px 0px'}}>News App - Top Headlines</h1>
         {this.state.loading && <Spinner/>}
         <div className="row">
         {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage}
            newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
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
