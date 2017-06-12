import React from 'react';

import ChartInfoCurr from '~/js/containers/chart/chartInfo/chartInfoCurr.js';
import ChartInfoValue from '~/js/containers/chart/chartInfo/chartInfoValue.js';
import ChartInfoDesc from '~/js/containers/chart/chartInfo/chartInfoDesc.js';


class ChartInfoTotal extends React.Component {
    render() {
        return (
            <div className="chartInfoTotal">
                <ChartInfoValue />
                <ChartInfoCurr />
                <br/>
                <ChartInfoDesc />
            </div>
        )
    }
}

export default ChartInfoTotal;