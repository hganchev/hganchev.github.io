import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'
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

import articleData from '../../utils/articlesData';

function ArticleView() {
    const { id } = useParams();
    const [markdown, setMarkdown] = React.useState('');

    React.useEffect(() => {
        fetch(articleData.articles[id].url)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }, []);

    return (
        //ReactDom.render(
        <ReactMarkdown
            children={markdown}
            components={{
            code({node, inline, className, children, ...props}) {
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
                )
            }
            }}
            remarkPlugins={[remarkGfm]}
        />//, document.body
        //)
    );
}
  
export default ArticleView;