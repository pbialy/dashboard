import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class BoxHeaderTitle extends React.Component {
    render() {
        return (
            <div className="boxHeaderTitle">
                <div className="titleText">
                    Revenue by Solution
                </div>
            </div>
        )
    }
}

export default BoxHeaderTitle;