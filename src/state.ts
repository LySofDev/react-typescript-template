import { RouterState } from 'react-router-redux';
import { HomeState } from './home';

export interface State {
    home: HomeState,
    router: RouterState
}
