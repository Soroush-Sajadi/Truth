import { combineReducers, createStore } from 'redux';
import { signInReducer } from './signInReducer';


const rootReducer = combineReducers({
    signIn : signInReducer
  })
export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);
