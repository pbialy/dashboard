import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import BoxHeader from '~/js/containers/box/boxHeader.js';
import BoxBody from '~/js/containers/box/boxBody.js';

class Box extends React.Component {
    render() {
        return (
            <div className="box">
                <BoxHeader />
                <BoxBody myType={this.props.myType} />
            </div>
        )
    }
}

export default Box;