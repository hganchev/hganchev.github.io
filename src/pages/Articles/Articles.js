import React, { useState, Component, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

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
        <Link class="item" to={`/articleview/${article.id}`}>
          <div class="item">
            <h5>{article.name}</h5>
            <p> {article.date}</p>
            <div className='div-label'>
              <LocalOfferIcon className='label-icon'/>
              <label>{article.label}</label>   
            </div>
            <img src={article.img}/>      
          </div>
        </Link>
      ))}
      </div>  
    </div>
  );
}

export default Articles;
