import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LazyLoadComponent from 'utils/LazyLoadComponent';
import PrivateRoute from './PrivateRoute';
import { Login } from 'views';

const Routes = () => {

    const lazyLoadHome = LazyLoadComponent(() => {
        
        return import('views/home/Home');
    
    });

    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" lazyLoadComp={lazyLoadHome} />                
                <Route path="/login" exact><Login /></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;