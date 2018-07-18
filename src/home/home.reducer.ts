import { Action } from '../action';

export interface HomeState {
  readonly title: string;
}

const initialState: HomeState = {
  title: "Hello, Initial State"
};

export function homeReducer(state: HomeState = initialState, action: Action): HomeState {
  return state;
}
