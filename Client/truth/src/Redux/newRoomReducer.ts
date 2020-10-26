export interface NewRoomState {
    room: string
    pass: string
  }
  
  const initialState =  {room:'', pass:''}
  
  type Action = {type: "NEW_ROOM", payload: NewRoomState}
  
  export const newRoomReducer = (state: NewRoomState = initialState , action: Action) :NewRoomState => {
    switch(action.type) {
      case "NEW_ROOM": {
        return action.payload
      }
      default: 
        return state
    }
  }