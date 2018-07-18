import * as React from 'react';
import { default as HomeLayout } from './home.layout';

export interface HomeComponentProps {
  title?: string;
}

interface HomeComponentState {
  defaultTitle: string;
}

export class HomeComponent extends React.Component<HomeComponentProps, HomeComponentState> {
  public state = {
    defaultTitle: "Hello, Default Title"
  }

  public render() {
    return (
      <HomeLayout
        title={this.props.title || this.state.defaultTitle}
      />
    )
  }
}
