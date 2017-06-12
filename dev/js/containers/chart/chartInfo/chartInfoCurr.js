import React from 'react';

class ChartInfoCurr extends React.Component {
    render() {
        return (
            <div className="chartInfoCurr">
                {this.props.currency}
            </div>
        )
    }
}

export default ChartInfoCurr;