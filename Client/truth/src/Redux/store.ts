import { combineReducers, createStore } from 'redux';
import { signInReducer } from './signInReducer';
import { newRoomReducer } from './newRoomReducer';
import { joinMessageReducer } from './joinMessageReducer';


const rootReducer = combineReducers({
    signIn : signInReducer,
    newRoom: newRoomReducer,
    joinMessage: joinMessageReducer

  })
export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);
