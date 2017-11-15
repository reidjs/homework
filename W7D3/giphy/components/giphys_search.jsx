import React from 'react';

import GiphysIndex from './giphys_index';
import { fetchSearchGiphys } from '../util/api_util';
import { receiveSearchGiphys } from '../actions/giphy_actions';
window.receiveSearchGiphys = receiveSearchGiphys;
window.fetchSearchGiphys = fetchSearchGiphys;
import configureStore from '../store/store';
document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
});
