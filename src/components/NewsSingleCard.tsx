import { Link } from 'react-router-dom';

type ArticleProps = {
  article: NewsArticleType;
};

function NewsSingleCard({ article }: ArticleProps) {
  return (
    <div className="w-full sm:w-[300px] h-full border border-mainBlue rounded-lg flex flex-col items-center gap-[15px]">
      <div className="relative w-full">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="h-[150px] w-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-2">
        <h2>{article.title}</h2>
        <Link to={article.url} target={'_blank'}>
          Read more
        </Link>
      </div>
    </div>
  );
}

export default NewsSingleCard;
