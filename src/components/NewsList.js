// Used for getting the list of news and rendering it to the list

import React from 'react';
import NewsItem from './NewsItem'

const NewsList = ({ articles, onArticleSelect} ) =>{
    
   const renderedList = articles.map((article) => {
       if(article.content){
        return <NewsItem key={article.url} onArticleSelect={onArticleSelect} article={article} />
       }
       else
       return <NewsItem key={article.url} onArticleSelect={onArticleSelect} article={article} />
    })
    
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default NewsList;