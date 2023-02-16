import { Helmet } from 'react-helmet-async';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Camera Shop. Page not found</title>
      </Helmet>

      <main>
        <h1 className="title title--h2">404. Page not found</h1>
        <a className="link" href="/">Back to the main page</a>
      </main>
    </>
  );
}

export default NotFoundScreen;
