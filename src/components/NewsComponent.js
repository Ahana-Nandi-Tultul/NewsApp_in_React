import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItems'

export class NewsComponent extends Component {
  static propTypes = {

  }

  render() {
    return (
       <div className="container my-3">
         <h2>News App - Top Headlines</h2>
         <div className="row">
            <div className="col-md-4">
                <NewsItem title="my Title" description="my desc" imageUrl="https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="my Title" description="my desc" imageUrl="https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="my Title" description="my desc" imageUrl="https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png"/>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsComponent
