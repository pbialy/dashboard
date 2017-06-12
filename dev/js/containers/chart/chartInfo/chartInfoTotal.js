import React from 'react';

import ChartInfoCurr from '~/js/containers/chart/chartInfo/chartInfoCurr.js';
import ChartInfoValue from '~/js/containers/chart/chartInfo/chartInfoValue.js';
import ChartInfoDesc from '~/js/containers/chart/chartInfo/chartInfoDesc.js';


class ChartInfoTotal extends React.Component {
    render() {
        const { value, currency, description } = this.props.total;
        return (
            <div className="chartInfoTotal">
                <div className="chartInfoValAndCurr">
                    <ChartInfoValue value={value} />
                    {currency && (<ChartInfoCurr currency={currency} />)}
                </div>
                <ChartInfoDesc description={description} />
            </div>
        )
    }
}

export default ChartInfoTotal;