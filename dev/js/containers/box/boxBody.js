import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import LineChart from '~/js/containers/chart/lineChart.js';
import ChartInfo from '~/js/containers/chart/chartInfo.js';

class BoxBody extends React.Component {
    render() {
        return (
            <div className="boxBody">
                <LineChart />
                <ChartInfo />
            </div>
        )
    }
}

export default BoxBody;