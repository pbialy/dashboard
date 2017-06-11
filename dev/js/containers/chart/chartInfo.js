import React from 'react';

import ChartInfoTotal from '~/js/containers/chart/chartInfo/chartInfoTotal.js';
import ChartInfoButton from '~/js/containers/chart/chartInfo/chartInfoButton.js';

class ChartInfo extends React.Component {
    render() {
        return (
            <div className="chartInfo">
                <ChartInfoTotal />
                <ChartInfoButton />
            </div>
        )
    }
}

export default ChartInfo;