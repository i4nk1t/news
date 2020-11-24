import React from 'react';


const NewsItem = ({ article }) => {
    return (
        <div
        className="video-item item link" >
            <img className="ui image" src={article.urlToImage} />
            <div className="content">
                <div className="header">
                    <a href ={article.url}>{article.title}</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;