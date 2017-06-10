import React from 'react';
import {connect} from 'react-redux';

import Box from '~/js/containers/box/box.js';


class App extends React.Component {
    render() {
        return (
            <div id="mainDiv">
                <Box />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        //displayMode: state.displayMode
    }
}

//export default connect(mapStateToProps)(App);

export default App;