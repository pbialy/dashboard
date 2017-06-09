import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div id="mainDiv">
                <p>hi</p>
                <h2>mom</h2>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        displayMode: state.displayMode
    }
}

export default connect(mapStateToProps)(App);