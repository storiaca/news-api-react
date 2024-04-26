type LinkType = {
  id: number;
  path: string;
  label: string;
};

type NewsArticleType = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source?: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
  category: string;
} & {
  id: number;
};

type GuardianArticleType = {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  tags: {
    id: string;
    type: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    references: any[];
    bio: string;
    firstName: string;
    lastName: string;
  }[];
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
};

type Author = {
  person: { firstName: string }[];
};

type Headline = {
  print_headline: string;
};

type NYTimesArticleType = {
  abstract: string;
  byline: Author;
  headline: Headline;
  pub_date: string;
  section_name: string;
  news_desk: string;
  snippet: string;
  source: string;
  subsection_name: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
  _id: string;
};

type PaginationPropsType = {
  postsPerPage: number;
  totalPosts: number;
  onPaginate: (pageNumber: number) => void;
};
