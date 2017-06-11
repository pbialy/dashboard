import React from 'react';
import {connect} from 'react-redux';

import Box from '~/js/containers/box/box.js';


class App extends React.Component {
    render() {
        // TODO get data here and make loop over boxes, pass some id so box can get data later
        return (
            <div id="mainDiv">
                <Box myType="line" />
                <Box myType="column" />
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