import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
charts(FusionCharts);

class ColumnChart extends React.Component {
    render() {
        return (
            <div className="chart">
                {/* <ReactFC {...chartConfigs} /> */}
            </div>
        )
    }
}

export default ColumnChart;