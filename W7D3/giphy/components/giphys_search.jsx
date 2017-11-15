import React from 'react';

import GiphysIndex from './giphys_index';
import { fetchSearchGiphys } from '../util/api_util';
window.fetchSearchGiphys = fetchSearchGiphys;
import configureStore from '../store/store';
document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
});
