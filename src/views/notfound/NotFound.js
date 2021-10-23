import { connect } from 'react-redux';
import { Search } from "views";

const NotFound = ({ searchMode }) => {

    return (
        searchMode ? <Search /> : (
            <div className="view">
                <h2 className="center-text text-center error-text">
                    <span className="error-404 d-block fade-animation">404</span>
                    Page Not Found...
                </h2>
            </div>
        )
    );

};

const mapStateToProps = ({ search }) => ({searchMode: search.mode});

export default connect(mapStateToProps)(NotFound);