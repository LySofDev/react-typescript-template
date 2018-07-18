import * as React from 'react';

export class AppLayout extends React.PureComponent {
  public render() {
    return (
      <div>
        <h1>Header</h1>
        {this.props.children}
      </div>
    );
  }
}
