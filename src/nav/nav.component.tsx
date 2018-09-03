import * as React from 'react';
import { default as NavLayout } from './nav.layout';

export interface NavComponentProps {
  title?: string;
  visible?: boolean;
}

interface NavComponentState {
  defaultTitle: string;
}

export class NavComponent extends React.Component<NavComponentProps, NavComponentState> {
  public state = {
    defaultTitle: "Default Brand"
  }

  public render() {
    if (!this.props.visible) { return null };
    return (
      <NavLayout
        title={this.props.title || this.state.defaultTitle}
        visible={true}
      />
    );
  }
}
