import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveNewsAction } from '../store/newsSlice';
import Loader from '../components/Loader';
import NewsSingleCard from '../components/NewsSingleCard';

import NewsService from '../services/newsService';
function HomePage() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.newsStore);
  useEffect(() => {
    NewsService.getAllNewsApi()
      .then((res) => {
        dispatch(saveNewsAction(res.data.articles));
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {isLoaded ? (
        news.map((article: NewsArticleType, index: number) => {
          return <NewsSingleCard key={index} article={article} />;
        })
      ) : (
        <div className="flex">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default HomePage;
