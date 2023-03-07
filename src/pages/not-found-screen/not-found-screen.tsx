import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Camera Shop. Page not found</title>
      </Helmet>

      <main>
        <h1 className="title title--h2">404. Page not found</h1>
        <Link className="link" to="/">Back to the main page</Link>
      </main>
    </>
  );
}

export default NotFoundScreen;
