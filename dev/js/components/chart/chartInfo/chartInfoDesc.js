import React from 'react';

class ChartInfoDesc extends React.Component {
    render() {
        return (
            <div className="chartInfoDesc">
                {this.props.description}
            </div>
        )
    }
}

export default ChartInfoDesc;