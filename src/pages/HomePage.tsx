import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveNewsAction } from '../store/newsSlice';
import Loader from '../components/Loader';
import NewsSingleCard from '../components/NewsSingleCard';

// images
import nyTimesImage from '../assets/ny-times.jpg';
import guardianImage from '../assets/guardian.jpg';

import NewsService from '../services/newsService';
function HomePage() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.newsStore);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const responseNewsApi = await NewsService.getAllNewsApi();
        const dataNewsApi = responseNewsApi.data.articles.map(
          (item: NewsArticleType) => ({
            author: item.author,
            content: item.content,
            description: item.description,
            publishedAt: item.publishedAt,
            source: { id: item.source?.id, name: item.source?.name },
            title: item.title,
            url: item.url,
            urlToImage: item.urlToImage,
            categories: [],
          }),
        );

        const responseGuardian = await NewsService.getAllGuardian();
        const dataGuardian = responseGuardian.data.response.results.map(
          (item: GuardianArticleType) => ({
            author: 'unknown',
            content: item.apiUrl,
            description: item.pillarName,
            publishedAt: item.webPublicationDate,
            source: { id: 'guardian', name: 'Guardian' },
            title: item.webTitle,
            url: item.webUrl,
            urlToImage: guardianImage,
            categories: item.sectionId,
          }),
        );

        const responseNYTimes = await NewsService.getAllNYTimes();
        const dataNyTimes = responseNYTimes.data.response.docs.map(
          (item: NYTimesArticleType) => ({
            author: item.byline?.person[0]?.firstName,
            content: item.snippet,
            description: item.abstract,
            publishedAt: item.pub_date,
            source: { id: 'ny-times', name: item.source },
            title: item.headline.print_headline,
            url: item.web_url,
            urlToImage: nyTimesImage,
            categories: item.news_desk,
          }),
        );

        const allDataNews = [...dataNewsApi, ...dataGuardian, ...dataNyTimes];

        const dataNewsWithId: NewsArticleType[] = allDataNews.map(
          (article, index) => ({
            ...article,
            id: index + 1,
          }),
        );
        dispatch(saveNewsAction(dataNewsWithId));
        //console.log(dataNewsWithId);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  console.log(news);

  return (
    <div>
      <h2>Nesto</h2>
      {isLoaded ? (
        news.map((article: NewsArticleType) => {
          return <NewsSingleCard key={article.id} article={article} />;
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
