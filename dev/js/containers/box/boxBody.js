import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import LineChart from '~/js/containers/chart/lineChart.js';
import ColumnChart from '~/js/containers/chart/columnChart.js';
import ChartInfo from '~/js/containers/chart/chartInfo.js';

class BoxBody extends React.Component {
    render() {
        // TODO if boxes[key].chartType === 'line' || 'column'
        return (
            <div className="boxBody">
                {this.props.myType === 'line' && <LineChart />}
                {this.props.myType === 'column' && <ColumnChart />}
                <ChartInfo />
            </div>
        )

    }
}

export default BoxBody;