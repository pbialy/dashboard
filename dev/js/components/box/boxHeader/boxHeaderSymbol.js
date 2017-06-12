import React from 'react';

class BoxHeaderSymbol extends React.Component {
    render() {
        return (
            <div className="boxHeaderSymbol">
                <div className="symbolOuterDiv">
                    <div className="symbolInnerDiv">
                        <div className="symbolSign">{this.props.symbol}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoxHeaderSymbol;