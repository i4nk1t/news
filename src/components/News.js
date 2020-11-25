//  Main classed based conmponent for redering the page 

import React, { Component } from 'react'
import {get_searchData, get_topStories} from '../apis/newsapi'
import NewsList from './NewsList'
import MainNews from './MainNews'
import SearchBar from './SearchBar'
import CategoryList from './CategoryList'


class News extends Component {

 

    // State declerations
        state = {
        articles: [],
        selectedArticle: null,
        // Categories listed as state
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
        ],
        selectedCategory: ''
       
     }

    //  Initializing the states
    componentDidMount = async () => {
        const res = await get_topStories()      
        this.setState({articles: res})
        this.setState({selectedArticle: res[0]})
        this.setState({selectedCategory: this.state.categories[0].cat})
            }

            // Function for search and categories
    onTermSubmit = async (term) => {
        console.log("We are trying to search for", term)
        const response = await get_searchData(term)

        console.log("This is our search result" ,response)
        this.setState({ 
            articles: response           
        })
}

// Function used for selecting the article
onArticleSelect = (article) => {
    this.setState({
        selectedArticle: article
    })
}

// Checking the state changes
componentDidUpdate = (prevState) => {
    if(prevState !== this.state){
        return this.state
    }
    else
    return prevState

}



render(){
    return(
    <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
       <div className="ui grid">
        <div className="ui row">
        <div className="three wide column">
            <h4>Categories</h4>
              <CategoryList 
                                        onCategorySelect={this.onTermSubmit} 
                                        categories={this.state.categories} />
                  </div>
            <div className="nine wide column">
            <MainNews article={this.state.selectedArticle} />
                </div>
            <div className="four wide column">
                <NewsList onArticleSelect={this.onArticleSelect} 
                                    articles={this.state.articles} />
            </div>
        </div>
    </div>
</div>
)
}}

export default News;