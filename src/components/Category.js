//  Component for each category getting populated as clickable tag

import React from 'react'


const Category = ({ category, onCategorySelect }) => {
    
    return (
        <div onClick={() =>{
            onCategorySelect(category.cat)
        }}>
        
        <div
        className="ui divided item" >
            
            <div className="content">
                <div className="header">
                    <br></br>
                    <label className="ui label tag teal " style={{cursor:'pointer'}}>{category.cat}</label>
                </div>
            </div>
        </div>
        
        </div>
        
        
    )
}

export default Category;