// For news in the center of the screen , the main detailed news

import React from 'react';

const MainNews = ({ article }) => {

    

    if(!article)
    {
        console.log("Here we are" , article)
        return <div>
            Unable to find article
        </div>
    }
      return (
        <div>
            <div className="ui embed">
                <img className="ui image" alt={article.title} title="news image" src={article.urlToImage} />
            </div>
            <div className="ui segment">
                <a href={article.url}><h3 className="ui header">{article.title}</h3></a>
                <h4><p>{article.description}</p></h4>
    <p>{article.content}</p>
            </div>
        </div>
    )
}

export default MainNews;