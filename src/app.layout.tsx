import * as React from 'react';
import { default as Nav } from './nav';
import { default as Flash } from './flash';

export class AppLayout extends React.PureComponent {
  public render() {
    return (
      <div>
        <Nav />
        {this.props.children}
        <Flash />
      </div>
    );
  }
}
