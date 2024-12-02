import * as React from 'react';
import './styles.css';
import './styles.sass';
import Article from '../Article/Article.tsx';
import { IArticle } from '../Article/IArticle.tsx';
import articles from './Articles.json';

/*
const Stack = ( spacing:number ) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: {spacing} }}>
    </div>
  );
};
*/

const ArticlesGrid: React.FC = () => {
  return (
    <div className="container">
      <div className="stack">
        {articles.map((item: IArticle, index: number) => (
          <Article
            title={item.title}
            body={item.body}
            isOdd={index % 2 == 0}
          ></Article>
        ))}
      </div>
    </div>
  );
};

export default ArticlesGrid;
