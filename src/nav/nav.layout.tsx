import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

interface NavLayoutProps {
  title: string;
}

export default (props: NavLayoutProps) => (
  <AppBar position="static" color="secondary">
    <Toolbar>
      <Typography variant="title" color="inherit">
        {props.title}
      </Typography>
    </Toolbar>
  </AppBar>
);
