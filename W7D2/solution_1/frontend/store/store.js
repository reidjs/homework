import { applyMiddleware } from 'redux';

const addLoggingToDispatch = (store) => {
  let localDispatch = store.dispatch;
  return (action) => {
    console.log(store.getState());
    console.log(action);
    localDispatch(action);
    console.log(store.getState());
  };
};
