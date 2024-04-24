import React from 'react';
type ArticleProps = {
  article: NewsArticleType;
};
function NewsSingleCard({ article }: ArticleProps) {
  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.urlToImage} alt="" className="h-48 w-40" />
    </div>
  );
}

export default NewsSingleCard;
