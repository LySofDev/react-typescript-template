import * as React from 'react';
import { CookieService } from './cookie.service';

export interface RemoveCookieProps {
  label: string;
}

export class RemoveCookieComponent extends React.Component<RemoveCookieProps, {}> {
  public componentDidMount() {
    CookieService.remove(this.props.label);
  }

  public render() {
    return null;
  }
}
