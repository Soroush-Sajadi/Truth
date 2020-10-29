export interface JoinMessageState {
    user: string
    text: string
  }
  
  const initialState =  {user:'', text:''}
  
  type Action = {type: "JOIN_MESSAGE", payload: JoinMessageState}
  
  export const joinMessageReducer = (state: JoinMessageState = initialState , action: Action) :JoinMessageState => {
    switch(action.type) {
      case "JOIN_MESSAGE": {
        return action.payload
      }
      default: 
        return state
    }
  }