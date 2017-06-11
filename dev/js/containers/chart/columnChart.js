import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
charts(FusionCharts);

class ColumnChart extends React.Component {
    render() {
        // check link below
        // http://www.fusioncharts.com/dev/chart-attributes.html?chart=errorbar2d
        return (
            <div className="chart">
                {/* <ReactFC {...chartConfigs} /> */}
            </div>
        )
    }
}

export default ColumnChart;