import React from 'react';
import ReactFC from 'react-fusioncharts';

import { columnChartSettings } from '~/css/chartsSettings.js';

class ColumnChart extends React.Component {
    render() {
        const chartData = this.props.chartData;

        const myDataSource = {
            chart: columnChartSettings.dataSourceChartField,
            categories: chartData.categories,
            dataset: chartData.dataset
        };

        const chartConfigs = Object.assign(
            {dataSource: myDataSource},
            columnChartSettings.chartConfigs
        );

        return (
            <div className="chart">
                <ReactFC {...chartConfigs} />
            </div>
        )
    }
}

export default ColumnChart;