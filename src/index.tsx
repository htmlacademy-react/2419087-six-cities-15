import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { offerPages } from './mocks/offer-page';
import { favoriteList } from './mocks/favorite-list';
import { AuthorizationStatus } from './const';
import { naerOffers } from './mocks/near-offer';

const authorizationStatus = AuthorizationStatus.Auth;
// const authorizationStatus = AuthorizationStatus.NoAuth;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers = {offers}
      offerPages= {offerPages}
      authorizationStatus = {authorizationStatus}
      favoriteList={favoriteList}
      naerOffers={naerOffers}
    />
  </React.StrictMode>
);
