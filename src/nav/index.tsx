import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../state';

import { NavComponent, NavComponentProps } from './nav.component';

export { NavState, navReducer } from './nav.reducer';

export default connect(
  (state: State) => ({
    title: state.nav.title,
    visible: state.nav.visible,
  })
)(
  (props: NavComponentProps) => (<NavComponent {...props} />)
);
