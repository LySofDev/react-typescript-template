import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State } from '../state';

import { FlashComponentProps, FlashComponent } from './flash.component';

import { CloseFlashAction } from './flash.actions';

export { CloseFlashAction, ShowFlashAction } from './flash.actions';

export { flashReducer, FlashState } from './flash.reducer';


export default connect(
  (state: State) => ({
    message: state.flash.message,
    open: state.flash.open,
  }),
  (dispatch: Dispatch) => ({
    closeFlash: () => { dispatch(CloseFlashAction()) }
  })
)(
  (props: FlashComponentProps) => (<FlashComponent {...props} />)
)
