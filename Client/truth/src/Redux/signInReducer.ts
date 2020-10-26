export interface SignInState {
    name: string
    room: string
    pass: string
  }
  
  const initialState =  {name:'', room:'', pass:''}
  
  type Action = {type: "SIGN_IN_USER", payload: SignInState}
  
  export const signInReducer = (state: SignInState = initialState , action: Action) :SignInState => {
    switch(action.type) {
      case "SIGN_IN_USER": {
        return action.payload
      }
      default: 
        return state
    }
  }