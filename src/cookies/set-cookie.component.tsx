import * as React from 'react';
import { CookieService } from './cookie.service';

export interface SetCookieProps {
  label: string;
  value: string;
}

export class SetCookie extends React.Component<SetCookieProps, {}> {
  public componentDidMount() {
    CookieService.set(this.props.label, this.props.value);
  }

  public render() {
    return null;
  }
}
