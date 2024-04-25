import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';

// store
import store from './store/store.ts';

// pages
import HomePage from './pages/HomePage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import SingleArticlePage from './pages/SingleArticlePage.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/singleArticle/:articleTitle',
        element: <SingleArticlePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
