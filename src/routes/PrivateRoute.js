import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';
import { useAuth } from 'hooks';
import { PreLoader } from 'ui';

const PrivateRoute = ({ ...rest }) => {

	let auth = useAuth();

    let LazyLoadComp = rest.lazyLoadComp;

    let UI = null;

    if(auth.showMainLoader) UI = <PreLoader />;
    else if(auth.user) UI = <LazyLoadComp />;
    else UI = <Redirect to={{pathname: "/login"}} />;

    return <Route render={() => UI} exact />;
}

export default PrivateRoute;