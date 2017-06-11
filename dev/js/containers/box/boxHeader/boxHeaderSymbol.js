import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class BoxHeaderSymbol extends React.Component {
    render() {
        return (
            <div className="boxHeaderSymbol">
                <div className="symbolOuterDiv">
                    <div className="symbolInnerDiv">
                        <div className="symbolSign">$</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoxHeaderSymbol;