import React from 'react';

import ChartInfoTotal from '~/js/components/chart/chartInfo/chartInfoTotal.js';
import ChartInfoButton from '~/js/components/chart/chartInfo/chartInfoButton.js';

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