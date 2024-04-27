import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';

const variants = {
  page: {text: 'Not found'},
  offer: {text: 'We have no offers with this ID'}
};

type TNotFoundProps = {
  type: keyof typeof variants;
}

function NotFound({type}: TNotFoundProps): JSX.Element {
  return (
    <div className="page page--gray">
      <Helmet>
        <title>6 городов. Страница не найдена</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--404">
        <div className="container">
          <h1>404 {variants[type].text}</h1>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
