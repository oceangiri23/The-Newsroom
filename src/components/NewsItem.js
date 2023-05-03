import React, { Component } from 'react'

export class NewsItem extends Component {




  render() {
            let {title, description, imageUrl, newsUrl, author,date } = this.props;
            return (
                    <div className='my-2'>
                        <div className="card" style={{width: "18rem"}}>
                            <img src= {!imageUrl ? "https://i.insider.com/631a48700a329a0011e38af1?width=1200&format=jpeg": imageUrl} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{title}...</h5>
                                <p className="card-text">{description}...</p>
                                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {date} </small> </p>
                                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary p-2 mb-2 bg-dark text-white">Read More</a>
                            </div>
                        </div>
                    </div>
            )
  }
}

export default NewsItem