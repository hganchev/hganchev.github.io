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
        <div class="item">
          <Link to={`/articleview/${article.id}`} class="link-h5">
            <h5>{article.name}</h5>
          </Link>
          <p> {article.date}</p>
          <div className='div-label'>
            <LocalOfferIcon className='label-icon'/>
            <label>{article.label}</label>   
          </div>
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
