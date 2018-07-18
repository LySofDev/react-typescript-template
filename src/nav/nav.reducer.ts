import { Action } from '../action';

export interface NavState {
  readonly title: string;
  readonly visible: boolean;
}

const initialState: NavState = {
  title: "Initial Brand",
  visible: true
};

export function navReducer(state: NavState = initialState, action: Action): NavState {
  return state;
}
