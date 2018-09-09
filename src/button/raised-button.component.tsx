import * as React from 'react';
import { RaisedButton } from './button.styles';

export interface RaisedButtonProps {
  label?: string;
  type?: string;
  onClick?: () => void;
}

export class RaisedButtonComponent extends React.Component<RaisedButtonProps, {}> {
  public render() {
    return (
      <RaisedButton
        onClick={this.props.onClick}
        type={this.props.type || "default"}>
        {this.props.label || this.props.children}
      </RaisedButton>
    )
  }
}
