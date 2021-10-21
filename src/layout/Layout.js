import { Fragment } from 'react';
import { ToTopButton } from "ui";
import { Navbar, Footer } from 'components';

const Layout = ({ children }) => {
    
    return (
        <Fragment>
            <Navbar />
                {children}
                <ToTopButton />
            <Footer />
        </Fragment>
    );
}

export default Layout;