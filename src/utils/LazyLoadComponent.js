import { Component } from 'react';
import PreLoader from 'ui/loaders/preloader/PreLoader';

const LazyLoadComponent = (importedLazyLoadComp) => {
    
    return class extends Component {
        
        state = {component: null}

        componentDidMount() {
            
            importedLazyLoadComp().then(comp => {

                this.setState({component: comp.default});
            
            });
        
        }

        render () {
        
            const C = this.state.component;
        
            return C ? <C {...this.props} /> : <PreLoader />
        
        }
    
    }

}

export default LazyLoadComponent;