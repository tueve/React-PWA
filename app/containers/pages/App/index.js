/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import 'typeface-roboto';

import HomePage from 'page/HomePage/Loadable';
import NotFoundPage from 'page/NotFoundPage/Loadable';
import { AppWrapper } from './style';
// import Header from 'components/Header';
// import Footer from 'components/Footer';

export default function App() {
  return (
    <AppWrapper container>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
    </AppWrapper>
  );
}
