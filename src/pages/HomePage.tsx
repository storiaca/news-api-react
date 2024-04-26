import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveNewsAction } from '../store/newsSlice';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import NewsSingleCard from '../components/NewsSingleCard';

interface NewsState {
  news: NewsArticleType[];
  searchTerm: string;
}

import NewsService from '../services/newsService';

// images
import nyTimesImage from '../assets/ny-times.jpg';
import guardianImage from '../assets/guardian.jpg';

function HomePage() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage: number = 12;
  const dispatch = useDispatch();
  const { news, searchTerm } = useSelector(
    (state: { newsStore: NewsState }) => state.newsStore,
  );

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
            category: 'techcrunch',
          }),
        );

        const responseGuardian = await NewsService.getAllGuardian();
        const dataGuardian = responseGuardian.data.response.results.map(
          (item: GuardianArticleType) => ({
            author: item.tags[0]?.webTitle,
            content: item.apiUrl,
            description: item.pillarName,
            publishedAt: item.webPublicationDate,
            source: { id: 'guardian', name: 'Guardian' },
            title: item.webTitle,
            url: item.webUrl,
            urlToImage: guardianImage,
            category: item.sectionId,
          }),
        );

        const responseNYTimes = await NewsService.getAllNYTimes();
        const dataNyTimes = responseNYTimes.data.response.docs.map(
          (item: NYTimesArticleType) => ({
            author: item.byline.person[0]?.firstName || 'unknown',
            content: item.snippet,
            description: item.abstract,
            publishedAt: item.pub_date,
            source: { id: 'ny-times', name: item.source },
            title: item.headline.print_headline,
            url: item.web_url,
            urlToImage: nyTimesImage,
            category: item.news_desk,
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
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {}, [searchTerm]);

  let content;

  if (!isLoaded) {
    content = (
      <div className="col-span-3 grid place-items-center">
        <Loader />
      </div>
    );
  } else if (searchTerm.length > 1) {
    let filteredNews = [...news];

    content = filteredNews
      .filter((item) => {
        const formattedDate = new Date(item.publishedAt).toLocaleDateString(
          'en-US',
          {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          },
        );
        if (searchTerm === '') {
          return item;
        } else if (
          item.source?.id.toLowerCase().includes(searchTerm) ||
          item.category.toLowerCase().includes(searchTerm) ||
          formattedDate.toLowerCase().includes(searchTerm)
        ) {
          return item;
        }
      })
      .map((article: NewsArticleType) => {
        return <NewsSingleCard key={article.id} article={article} />;
      });
  } else {
    const indexOfLastPost: number = currentPage * postsPerPage;
    const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
    const currentArticles: NewsArticleType[] =
      news?.slice(indexOfFirstPost, indexOfLastPost) || [];

    content = currentArticles.map((article: NewsArticleType) => {
      return <NewsSingleCard key={article.id} article={article} />;
    });
  }

  const onClickPaginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="m-8 container mx-auto ">
      <h2 className="text-2xl text-center">
        {searchTerm && searchTerm.length > 1
          ? `News from: ${searchTerm}`
          : 'All News'}
      </h2>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 md-2:grid-cols-3 gap-4 mt-5">
        {content}
      </div>
      {searchTerm.length > 1 ? (
        ''
      ) : (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={news.length || 0}
          onPaginate={onClickPaginate}
        />
      )}
    </div>
  );
}

export default React.memo(HomePage);
