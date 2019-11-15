import { Actions } from '../actions/counter.actions';
import * as counterActions from '../actions/counter.actions';

interface CounterState {
  counter: number;
  loading: boolean;
  error: any;
}

const initialState: CounterState = {
  counter: 0,
  loading: false,
  error: null
};

export function counterReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case counterActions.INCREMENT_COUNTER:
      return { ...state, counter: state.counter + action.payload };

    case counterActions.DECREMENT_COUNTER:
      return { ...state, counter: state.counter - action.payload };

    case counterActions.GET_COUNTER:
      return { ...state, loading: true, error: null };

    case counterActions.GET_COUNTER_SUCCESS:
      return { ...state, loading: false, counter: action.payload.counter };

    case counterActions.GET_COUNTER_ERROR:
      return { ...state, loading: false, error: { message: 'Something has gone wrong' } };

    default:
      return state;
  }
}
