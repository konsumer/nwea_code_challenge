import { createStore } from 'redux'

import actions from './actions'

const initialState = {
  numberOfPlayers: 2,
  hands: [],
  discard: [],
  showing: [],
  scores: []
}

// Redux store built from defined actions
export const reducer = (state = initialState, action) => actions[action.type] ? Object.assign({}, state, actions[action.type](state, action.data)) : state
export const store = createStore(reducer, process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// setup initial state
store.dispatch({type: 'NEWGAME'})

export default store
