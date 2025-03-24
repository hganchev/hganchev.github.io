import React, { useState, useEffect, useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from 'rehype-raw'

import './ArticleView.css'
import articleData from '../../utils/articlesData';

function ArticleView() {
    const { id } = useParams();
    const [markdown, setMarkdown] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState('');
    const [readingProgress, setReadingProgress] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(articleData.articles[id].url);
                if (!res.ok) throw new Error('Failed to fetch article');
                const text = await res.text();
                setMarkdown(text);
                setTitle(articleData.articles[id].title || 'Article');
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMarkdown();

        // Add scroll event listener to track reading progress and show/hide scroll button
        const updateScrollState = () => {
            const scrollTop = window.scrollY;
            const docHeight = 
                document.documentElement.scrollHeight - 
                document.documentElement.clientHeight;
            
            // Update reading progress
            const scrollPercent = scrollTop / docHeight;
            setReadingProgress(scrollPercent);
            
            // Show scroll top button after scrolling down a bit
            setShowScrollTop(scrollTop > 300);
        };

        window.addEventListener('scroll', updateScrollState);
        return () => window.removeEventListener('scroll', updateScrollState);
    }, [id]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const memoizedMarkdown = useMemo(() => (
        <div className="markdown-body">
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={{
                    code: ({node, inline, className, children, ...props}) => {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                {...props}
                                children={String(children).replace(/\n$/, '')}
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                            />
                        ) : (
                            <code {...props} className={className}>
                                {children}
                            </code>
                        );
                    }
                }}
            >
                {markdown}
            </ReactMarkdown>
        </div>
    ), [markdown]);

    if (isLoading) return <div className="book-loading">Loading...</div>;
    if (error) return <div className="book-error">Error: {error}</div>;

    return (
        <div className="book-container">
            <div className="book-header">
                <h1 className="book-title">{title}</h1>
            </div>
            <div className="book-content">
                <div className="chapter-marker"></div>
                {memoizedMarkdown}
            </div>
            <div className="book-footer">
                <div className="page-number">
                    {Math.round(readingProgress * 100)}% read
                </div>
            </div>
            
            {showScrollTop && (
                <div className="scroll-top-button" onClick={scrollToTop} title="Back to top">
                    ↑
                </div>
            )}
        </div>
    );
}
  
export default ArticleView;