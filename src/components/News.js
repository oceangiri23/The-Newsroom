import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

constructor(){
super();
this.state = {
        articles: [],
        loading: false,
        page:1,

    
}
}

async componentDidMount(){
  
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4dcacf12b01f48559798204f3262c9bd&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading : true});
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false })
}   // take data from API

handlePrevClick= async ()=>{
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4dcacf12b01f48559798204f3262c9bd&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading : true});
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
    })
}

handleNextClick= async ()=>{
  console.log("Next");
if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4dcacf12b01f48559798204f3262c9bd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading : true});
  let data = await fetch(url);
  let parsedData = await data.json()
    this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
    })
}
}

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>The Newsroom - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {this.state.articles.map((element)=>{
              return     <div className="col-md-4" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
          })}
            </div>
            <div className="conrainer d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil (this.state.totalResults/this.props.pageSize)}   type="button" className="btn btn-info" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
     
    )
  }
}

export default News