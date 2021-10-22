import { connect } from 'react-redux';
import { Search } from "views";

const NotFound = ({ searchMode }) => {

    return (
        searchMode ? <Search /> : (
            <div className="view">
                <h2 className="center-text text-center">
                    <span className="error_404 d-block">404</span>
                    Page Not Found...
                </h2>
            </div>
        )
    );

};

const mapStateToProps = ({ search }) => ({searchMode: search.mode});

export default connect(mapStateToProps)(NotFound);