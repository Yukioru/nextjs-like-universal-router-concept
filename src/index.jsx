import React from 'react';
import ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';
import qs from 'query-string';
// import glob from 'glob-promise';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Page from './Page';
import compileRoutes from './utils/compileRoutes';

const target = document.getElementById('root');

const req = require.context('./pages', true, /.jsx$/);
const routes = compileRoutes(req);
console.log(routes);

const page = new Page();
const router = new UniversalRouter(routes);

router.resolve({
  pathname: document.location.pathname,
  path: document.location.pathname,
  query: qs.parse(document.location.search),
  page,
}).then((component) => {
  if (target.hasChildNodes()) {
    ReactDOM.hydrate(component, target);
  } else {
    ReactDOM.render(component, target);
  }
});

ReactDOM.render(<App />, target);
serviceWorker.unregister();