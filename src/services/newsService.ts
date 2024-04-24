import axios from 'axios';

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const GUARDIAN_API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY;
const NYTIMES_API_KEY = import.meta.env.VITE_NYTIMES_API_KEY;

class NewsService {
  static getAllNewsApi = () =>
    axios.get(
      `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${NEWS_API_KEY}`,
    );
  static getAllGuardian = () =>
    axios.get(
      `https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=${GUARDIAN_API_KEY}`,
    );
  static getAllNYTimes = () =>
    axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${NYTIMES_API_KEY}`,
    );
}

export default NewsService;
