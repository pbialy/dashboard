import React from 'react';

import BoxHeader from '~/js/containers/box/boxHeader.js';
import BoxBody from '~/js/containers/box/boxBody.js';

class Box extends React.Component {
    render() {
        const { chartType, symbol, headerText, chartData, chartInfo} = this.props.boxData;
        return (
            <div className="box">
                <BoxHeader symbol={symbol} headerText={headerText} />
                <BoxBody chartType={chartType} chartData={chartData} chartInfo={chartInfo} />
            </div>
        )
    }
}

export default Box;