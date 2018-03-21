import { combineReducers } from 'redux';//function that collects values down to a single value

import user from "./reducers/user";

export default combineReducers({ //takes state and returns new state
  user
})
