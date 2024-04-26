import { Link } from 'react-router-dom';

type ArticleProps = {
  article: NewsArticleType;
};

function NewsSingleCard({ article }: ArticleProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  );
  return (
    <div className="w-full col-span-1 sm:w-[300px] h-full border border-mainBlue rounded-lg flex flex-col justify-evenly items-center gap-[15px]">
      <div className="relative w-full">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="h-[150px] w-full object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-stone-900/60 rounded-t-lg hover:opacity-0 transition-all duration-300 cursor-pointer"></div>
      </div>
      <div className="p-2">
        <h2 className="uppercase text-base text-center">
          {article.source?.id}
        </h2>
        <h3 className="text-center mb-2 mt-1">{article.title ?? 'No title'}</h3>
        <h4 className="text-stone-600 font-bold mt-3 mb-1">
          Author: <span className="text-green-700">{article.author}</span>
        </h4>
        <div className="flex justify-between items-center w-full">
          <p>{formattedDate}</p>
          <Link
            className="bg-orange-400 text-white rounded-sm px-3 py-1 hover:bg-green-800 transition-all duration-200"
            to={article.url}
            target={'_blank'}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsSingleCard;
