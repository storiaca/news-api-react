import axios from 'axios';

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

class NewsService {
  static getAllNewsApi = () =>
    axios.get(
      `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${NEWS_API_KEY}`,
    );
}

export default NewsService;
