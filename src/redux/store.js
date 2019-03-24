// import { createStore as reduxCreateStore } from "redux"
import { configureStore } from 'redux-starter-kit'
import auth from "./reducers/auth";

// const initialState = { count: 0 }

const createStore = () => configureStore({
  reducer: {
    root: auth
  }
})

export default createStore

// const reducer = (state = initialState, action) => {
//   if (action.type === `INCREMENT`) {
//     return Object.assign({}, state, {
//       count: state.count + 1,
//     })
//   }
//   return state
// }

// const store = configureStore({
//   reducer: {
//     root: reducer
//   }
// })

// const createStore = () => reduxCreateStore(reducer, initialState)