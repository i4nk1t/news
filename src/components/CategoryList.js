//  Used for rendering the categories fetched from news.js and passing each category to its child component (<Category>)

import React from 'react';
import Category from './Category'

const CategoryList = ({ categories, onCategorySelect}) => {
    const renderedCategory = categories.map((category) => {
        
return <Category key={category.cat} category={category} onCategorySelect={onCategorySelect} />

})    

return (
    <div className="ui relaxed divided list">
    {renderedCategory}
    </div>
)
}

export default CategoryList;