import React from 'react';

import BoxHeaderSymbol from '~/js/containers/box/boxHeader/boxHeaderSymbol.js';
import BoxHeaderTitle from '~/js/containers/box/boxHeader/boxHeaderTitle.js';

class BoxHeader extends React.Component {
    render() {
        return (
            <div className="boxHeader">
                <BoxHeaderSymbol symbol={this.props.symbol} />
                <BoxHeaderTitle headerText={this.props.headerText} />
            </div>
        )
    }
}

export default BoxHeader;