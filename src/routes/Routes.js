import { Route, Switch } from 'react-router-dom';
import { LazyLoadComponent } from 'utils';
import { Login, NotFound } from 'views';
import PrivateRoute from './PrivateRoute';

const Routes = () => {

    const lazyLoadHome = LazyLoadComponent(() => {
        
        return import('views/home/Home');
    
    });

    const lazyLoadMyFavorites = LazyLoadComponent(() => {
        
        return import('views/myfavorites/MyFavorites');
    
    });

    return (
        <Switch>
            <PrivateRoute path="/" exact lazyLoadComp={lazyLoadHome} />                
            <PrivateRoute path="/my-favorites" exact lazyLoadComp={lazyLoadMyFavorites} />                
            <Route path="/login"><Login /></Route>
            <Route><NotFound /></Route>
        </Switch>
    );
}

export default Routes;