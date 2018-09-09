import * as React from 'react';
import { CookieService } from './cookie.service';

export interface GetCookieProps {
  label: string;
  children: (value: string) => React.ReactNode;
}

interface GetCookieState {
  value: string;
}

export class GetCookieComponent extends React.Component<GetCookieProps, GetCookieState> {
  public componentDidMount() {
    this.setState({
      value: CookieService.get(this.props.label)
    });
  }

  public render() {
    return this.props.children(this.state.value);
  }
}
