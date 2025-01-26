import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import articleData from '../../utils/articlesData';
import './Articles.css';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [label, setLabel] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articleTime, setArticleTime] = useState({});

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        
        // Fetch and process each article
        const processedArticles = await Promise.all(
          articleData.articles.map(async (article) => {
            try {
              // Fetch article content
              const response = await fetch(article.url);
              if (!response.ok) throw new Error(`Failed to fetch ${article.title}`);
              const content = await response.text();
              
              // Calculate read time
              const wordsPerMinute = 220;
              const wordCount = content.trim().split(/\s+/).length;
              const readTime = Math.ceil(wordCount / wordsPerMinute);
              
              return {
                ...article,
                formattedDate: new Date(article.date).toLocaleDateString(),
                readTime: readTime
              };
            } catch (err) {
              console.error(`Error processing article ${article.title}:`, err);
              return {
                ...article,
                formattedDate: new Date(article.date).toLocaleDateString(),
                readTime: 0
              };
            }
          })
        );

        setArticles(processedArticles);
        
        // Create time mapping
        const timeMapping = {};
        processedArticles.forEach(article => {
          timeMapping[article.id] = {
            date: article.formattedDate,
            readTime: article.readTime
          };
        });
        setArticleTime(timeMapping);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = useMemo(() => {
    return label === 'All'
      ? articles
      : articles.filter(article => article.label === label);
  }, [articles, label]);

  const ArticleCard = React.memo(({ article }) => (
    <div className="item">
      <div>
        <h5>
          <Link to={`/articleview/${article.id}`}>
            {article.name}
          </Link>
        </h5>
      </div>
      <p>{articleTime[article.id]?.date} · {articleTime[article.id]?.readTime} min read</p>
      <div className="div-label">
        <LocalOfferIcon className="label-icon"/>
        <label>{article.label}</label>
      </div>
      <img src={article.img} alt={article.name}/>
    </div>
  ));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='articles'>
      <div className='section_title al_center'>
        <span></span>
        <h1 className='section_title_text s_40'>Articles</h1>
      </div>
      <div className="dropdown">
        <select className='select' onChange={(e) => setLabel(e.target.value)}>
          <option value='All'>All</option>
          <option value='TwinCAT'>TwinCAT</option>
          <option value='Technology'>Technology</option>
        </select>
      </div>
      <div className="grid">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Articles;
