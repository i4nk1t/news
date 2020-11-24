import React from 'react';
import NewsItem from './NewsItem'

const NewsList = ({ articles} ) =>{
    
   const renderedList = articles.map((article) => {
        return <NewsItem key={article.title} article={article}/>
    })
    
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default NewsList;
