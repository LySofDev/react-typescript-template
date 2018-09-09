import * as React from 'react';
import { TextButton } from './button.styles';

export interface TextButtonProps {
  label?: string;
  type?: string;
  onClick?: () => void;
}

export class TextButtonComponent extends React.Component<TextButtonProps, {}> {
  public render() {
    return (
      <TextButton
        onClick={this.props.onClick}
        type={this.props.type || "default"}>
        {this.props.label || this.props.label}
      </TextButton>
    )
  }
}
