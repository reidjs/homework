import * as APIUtil from '../util/api_util';
export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';

export const receiveSearchGiphys = giphys => {
  console.log('receive search giphys', giphys);
  return {
    type: RECEIVE_SEARCH_GIPHYS,
    giphys
  };
};

//thunk action
export const fetchSearchGiphys = (searchTerm) => {
  console.log('fetch giphys:', searchTerm);
  return (dispatch) => {
    APIUtil.fetchSearchGiphys(searchTerm)
      .then(giphys => dispatch(receiveSearchGiphys(giphys.data)));
  };
};
