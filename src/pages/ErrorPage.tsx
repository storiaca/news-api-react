import { Link, useRouteError } from 'react-router-dom';
import { ReactElement } from 'react';

interface RouteError {
  status: number;
  data?: string;
}
function ErrorPage(): ReactElement {
  // @ts-ignore
  const error: RouteError = useRouteError();

  let title: string = 'An error occurred';
  let message: string = 'Something went wrong!';

  if (error.status === 500 && error.data) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <div className="container mx-auto mt-9">
      <h1 className="text-2xl mb-6">{title}</h1>
      <p>{message}</p>

      <div className="mt-4">
        <Link to="/" className="text-orange-400 uppercase hover:text-green-600">
          Back to Home Page
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
