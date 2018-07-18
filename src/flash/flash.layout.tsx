import * as React from 'react';
import { Snackbar, Slide, SnackbarContent } from '@material-ui/core';

interface FlashLayoutProps {
  open: boolean;
  message: string;
  handleClose: (event: React.SyntheticEvent) => void;
}

const SlideUp = (props: any) => (<Slide {...props} direction="up" />);

export default (props: FlashLayoutProps) => (
  <Snackbar
    open={props.open}
    TransitionComponent={SlideUp}
    onClick={props.handleClose}>
    <SnackbarContent
      message={<span>{props.message}</span>}
    />
  </Snackbar>
);
