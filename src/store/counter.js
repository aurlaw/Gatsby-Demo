const INCREMENT_COUNTER = "INCREMENT_COUNTER";


const initialState = { counter: 0};

  export const actionCreators = {
    incrementCounter: () => (dispatch, getState) => {
        dispatch({type: INCREMENT_COUNTER});
    }
  };
  export const counterReducer = (state, action) => {
    state = state || initialState;
    if (action.type === INCREMENT_COUNTER) {
      return {
        ...state,
        counter: state.counter+1
      };
    }  
    return state;
  };
