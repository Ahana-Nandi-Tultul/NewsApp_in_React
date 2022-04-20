import React, { Component } from 'react'

export class NewsItemComponent extends Component {
  

  render() {
    let {title, description, imageUrl, newsUrl}=this.props;
    return (
      <div className="my-3">
       <div className="card">
          <img src={imageUrl?imageUrl:"https://images.moneycontrol.com/static-mcnews/2022/03/fandosensexniftyderivative-770x433.jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}..</p>
            <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItemComponent
