import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


import Chart from '~/js/containers/chart/chart.js';
import ChartInfo from '~/js/containers/chart/chartInfo.js';

class BoxBody extends React.Component {
    render() {
        return (
            <div className="boxBody">
                <Chart />
                <ChartInfo />
            </div>
        )
    }
}

export default BoxBody;