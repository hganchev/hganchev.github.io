import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {a11yDark, atomDark, base16AteliersulphurpoolLight, cb,
    coldarkCold, coldarkDark, coy, coyWithoutShadows, darcula, 
    dark, dracula, duotoneDark, duotoneEarth, duotoneForest, 
    duotoneLight, duotoneSea, duotoneSpace, funky, ghcolors, 
    gruvboxDark, gruvboxLight, holiTheme, hopscotch, lucario, 
    materialDark, materialLight, materialOceanic, nightOwl, nord, 
    okaidia, oneDark, oneLight, pojoaque, prism, shadesOfPurple, 
    solarizedDarkAtom, solarizedlight, synthwave84, tomorrow, 
    twilight, vs, vscDarkPlus, xonokai, zTouch} from 'react-syntax-highlighter/dist/esm/styles/prism'

import './ArticleView.css'
import articleData from '../../utils/articlesData';

function ArticleView() {
    const { id } = useParams();
    const [markdown, setMarkdown] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(articleData.articles[id].url);
                if (!res.ok) throw new Error('Failed to fetch article');
                const text = await res.text();
                setMarkdown(text);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMarkdown();
    }, [id]); // Added id to dependency list

    const memoizedMarkdown = React.useMemo(() => (
        <ReactMarkdown
            className='markdown-body'
            children={markdown}
            components={{
                code: React.memo(({node, inline, className, children, ...props}) => {
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
                })
            }}
        />
    ), [markdown]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return memoizedMarkdown;
}
  
export default ArticleView;