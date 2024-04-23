import React from 'react';
type ArticleProps = {
  article: NewsArticleType;
};
function NewsSingleCard({ article }: ArticleProps) {
  return (
    <div>
      <h2>{article.title}</h2>
    </div>
  );
}

export default NewsSingleCard;
