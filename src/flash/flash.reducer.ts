import { Action } from '../action';
import { CLOSE_FLASH, SHOW_FLASH } from './flash.actions';

export interface FlashState {
  readonly message?: string;
  readonly open: boolean;
}

const initialState: FlashState = {
  message: "",
  open: false
};

export function flashReducer(state: FlashState = initialState, action: Action): FlashState {
  switch(action.type) {

    case CLOSE_FLASH:
      return {
        open: false
      }

    case SHOW_FLASH:
      return {
        message: action.payload || "NO MESSAGE GIVEN",
        open: true
      }

    default:
      return state;
  }
}
