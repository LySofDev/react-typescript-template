import { RouterState } from 'react-router-redux';
import { HomeState } from './home';
import { NavState } from './nav';

export interface State {
    home: HomeState,
    router: RouterState,
    nav: NavState
}
