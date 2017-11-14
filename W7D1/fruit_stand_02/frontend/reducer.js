// import { ADD_FRUIT, CLEAR } from "./actions";

const _defaultState = {
  fruits: []
}
//must have default state for the first time this function is run. 
const reducer = (oldState = _defaultState, action) => {
  switch (action.type) {
    case "ADD_FRUIT":
      return {
        fruits: [...oldState.fruits, action.fruit] //concat old fruits with new ones in action
      }
    case "CLEAR":
      return _defaultState;
    default:
      return oldState;
  }
  //return new state
}

export default reducer;
