import React from 'react';

import ChartInfoTotal from '~/js/containers/chart/chartInfo/chartInfoTotal.js';
import ChartInfoButton from '~/js/containers/chart/chartInfo/chartInfoButton.js';

class ChartInfo extends React.Component {
    render() {
        const { total, buttonText } = this.props.chartInfo;
        return (
            <div className="chartInfo">
                <ChartInfoTotal total={total} />
                <ChartInfoButton buttonText={buttonText} />
            </div>
        )
    }
}

export default ChartInfo;