import * as React from 'react';
import { default as Nav } from './nav';

export class AppLayout extends React.PureComponent {
  public render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
