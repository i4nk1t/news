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
                <iframe title="news image" src={article.urlToImage} />
            </div>
            <div className="ui segment link">
                <a href={article.url}><h3 className="ui header">{article.title}</h3></a>
                <h4><p>{article.description}</p></h4>
    <p>{article.content}</p>
            </div>
        </div>
    )
}

export default MainNews;