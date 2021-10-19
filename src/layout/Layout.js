import { Fragment } from 'react';
import { Navbar, Footer } from 'components';

const Layout = ({children}) => {
    return (
        <Fragment>
            <Navbar />
                {children}
            <Footer />
        </Fragment>
    )
}

export default Layout;