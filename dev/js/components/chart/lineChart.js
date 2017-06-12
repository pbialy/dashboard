import React from 'react';
import ReactFC from 'react-fusioncharts';

import { lineChartSettings } from '~/js/chartsSettings.js';

class LineChart extends React.Component {
    render() {
        const chartData = this.props.chartData;

        const myDataSource = {
            chart: lineChartSettings.dataSourceChartField,
            categories: chartData.categories,
            dataset: chartData.dataset
        };

        const chartConfigs = Object.assign(
            {dataSource: myDataSource},
            lineChartSettings.chartConfigs
        );

        return (
            <div className="chart">
                <ReactFC {...chartConfigs} />
            </div>
        )
    }
}

export default LineChart;