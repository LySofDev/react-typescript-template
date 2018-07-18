import * as React from 'react';
import { default as FlashLayout } from './flash.layout';

export interface FlashComponentProps {
  open: boolean;
  closeFlash: () => void;
  message: string;
}

export class FlashComponent extends React.PureComponent<FlashComponentProps> {
  public render () {
    return (
      <FlashLayout
        open={this.props.open}
        message={this.props.message}
        handleClose={this.props.closeFlash}
      />
    );
  }
}
