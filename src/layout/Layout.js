import { Fragment } from 'react';
import { connect } from 'react-redux';
import { ToTopButton } from "ui";
import { MovieModal, Navbar, Footer } from 'components';

const Layout = ({ movieModalIsOpened, children }) => {
    
    return (
        <Fragment>
            <Navbar />
                {children}
                <ToTopButton />
                {movieModalIsOpened && <MovieModal />}
            <Footer />
        </Fragment>
    );
}

const mapStateToProps = ({ search, movieModal }) => ({

    searchMode: search.mode,
    movieModalIsOpened: movieModal.open
    
});

export default connect(mapStateToProps)(Layout);