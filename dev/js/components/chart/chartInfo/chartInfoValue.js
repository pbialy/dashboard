import React from 'react';

class ChartInfoValue extends React.Component {
    render() {
        return (
            <div className="chartInfoValue">
                {this.props.value}
            </div>
        )
    }
}

export default ChartInfoValue;