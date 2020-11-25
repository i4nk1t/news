//Used for getting each news as item out of the list

import React from 'react';


const NewsItem = ({ article, onArticleSelect }) => {
    return (
        <div onClick={() =>{
            onArticleSelect(article)
        }}>
        
        <div
        className="video-item item" style={{cursor:'pointer'}}>
            <img alt={article.title} className="ui image" src={article.urlToImage} />
            <div className="content">
                <div className="header">
                    {article.title}
                </div>
            </div>
        </div>
        
        </div>
    )
}

export default NewsItem;