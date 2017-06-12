import React from 'react';

import LineChart from '~/js/components/chart/lineChart.js';
import ColumnChart from '~/js/components/chart/columnChart.js';
import ChartInfo from '~/js/components/chart/chartInfo.js';

class BoxBody extends React.Component {
    render() {
        return (
            <div className="boxBody">
                {this.props.chartType === 'line' && (
                    <LineChart chartData={this.props.chartData} />
                )}
                {this.props.chartType === 'column' && (
                    <ColumnChart chartData={this.props.chartData} />
                )}
                <ChartInfo chartInfo={this.props.chartInfo} />
            </div>
        )

    }
}

export default BoxBody;