import React, { Component } from 'react'

export class NewsItem extends Component {




  render() {
            let {title, description, imageUrl, newsUrl} = this.props;
            return (
                    <div className='my-2'>
                        <div className="card" style={{width: "18rem"}}>
                            <img src= {!imageUrl ? "https://i.insider.com/631a48700a329a0011e38af1?width=1200&format=jpeg": imageUrl} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{title}...</h5>
                                <p className="card-text">{description}...</p>
                                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
            )
  }
}

export default NewsItem