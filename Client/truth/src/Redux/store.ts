import { combineReducers, createStore } from 'redux';
import { signInReducer } from './signInReducer';
import { newRoomReducer } from './newRoomReducer';


const rootReducer = combineReducers({
    signIn : signInReducer,
    newRoom: newRoomReducer
  })
export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);
