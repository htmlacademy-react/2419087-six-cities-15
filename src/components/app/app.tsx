import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';

import Main from '../../pages/main/main';
import Offer from '../../pages/offer/offer';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../../components/private-route/private-route';
import {OfferCardsType} from '../../types/offer';
import { OfferPages } from '../../types/offer-page';

type AppProps = {
  offers: OfferCardsType;
  offerPages: OfferPages;
  favoriteList: OfferCardsType;
  authorizationStatus: AuthorizationStatus;
}

function App({offers, offerPages, favoriteList, authorizationStatus}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Main offers={offers}/>} />
          <Route path={AppRoute.Offer} element={<Offer offerPages={offerPages} authorizationStatus={authorizationStatus}/>} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <Favorites favoriteList={favoriteList}/>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound type='page'/>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
