import React, { Component } from 'react'
import {get_searchData, get_topStories} from '../apis/newsapi'
import NewsList from './NewsList'
import MainNews from './MainNews'
import SearchBar from './SearchBar'


class News extends Component {

 

    
        state = {
        articles: [],
        categories: [
            {
            cat:'Sports'
            },
            {
                cat:'Business'
            },
            {
                cat:'Finance'
            },
            {
                cat: 'Health'
            },
            {
                cat: 'Politics'
            },
            {
                cat: 'Food'
            },
            {
                cat:'Animals'
            }
        ]
       
     }

    componentDidMount = async () => {
        const res = await get_topStories()      
        this.setState({articles: res})
        console.log(this.state.articles[0])
    }

    onTermSubmit = async (term) => {
        console.log("We are trying to search for", term)
        const response = await get_searchData(term)

        console.log("This is our search result" ,response)
        this.setState({ 
            articles: response           
        })
}

componentDidUpdate = (prevState) => {
    if(prevState !== this.state){
        return this.state
    }

}

renderedCategory =  this.state.categories.map((category) =>
{
      return(

        <div className="ui divided selection list">
            
            <button className="ui basic secondary button" onClick={this.onTermSubmit(category.cat)}
            >
                {category.cat}
            </button>
    </div>
    )
})



render(){
    return(
    <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
       <div className="ui grid">
        <div className="ui row">
        <div className="three wide column">
            <h4>Categories</h4>
              {this.renderedCategory}
                  </div>
            <div className="nine wide column">
            <MainNews article={this.state.articles[0]} />
                </div>
            <div className="four wide column">
                <NewsList articles={this.state.articles} />
            </div>
        </div>
    </div>
</div>
)
}}

export default News;