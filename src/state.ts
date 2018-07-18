import { RouterState } from 'react-router-redux';
import { HomeState } from './home';
import { NavState } from './nav';
import { FlashState } from './flash';

export interface State {
    flash: FlashState;
    home: HomeState;
    router: RouterState;
    nav: NavState;
}
