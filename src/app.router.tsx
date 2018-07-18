import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { AppLayout } from './app.layout';
import { default as history } from './history';
import { default as Home } from './home';
import { default as store } from './store';

const HomeComponent = () => (<Home />);

export class AppRouter extends React.PureComponent {
  public render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <AppLayout>
            <Route path="/" exact={true} render={HomeComponent} />
          </AppLayout>
        </Router>
      </Provider>
    );
  }
}
