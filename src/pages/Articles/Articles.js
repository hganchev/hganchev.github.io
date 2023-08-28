import React, { useState, Component, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

import articleData from '../../utils/articlesData';

function Articles() {
  return (
    <div className='articles'>
      <div className='section_title al_center'>
        <span></span>
        <h1 className='section_title_text s_40'> Articles </h1>
      </div>
      <div class="grid">
      {articleData.articles.map((article) => (
        <div class="item">
          <h5>{article.name}</h5>
          <p> {article.description}</p>
          <Link to={`/articleview/${article.id}`}>
            <img src={article.img}/>
          </Link>
        </div>
      ))}
      </div>  
    </div>
  );
}

export default Articles;
