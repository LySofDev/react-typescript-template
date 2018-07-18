import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../state';

import { HomeComponent, HomeComponentProps } from './home.component';

export { homeReducer, HomeState } from './home.reducer';

export default connect(
  (state: State) => ({ title: state.home.title }),
)(
  (props: HomeComponentProps) => (<HomeComponent {...props} />)
);
