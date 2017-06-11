import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import BoxHeaderSymbol from '~/js/containers/box/boxHeader/boxHeaderSymbol.js';
import BoxHeaderTitle from '~/js/containers/box/boxHeader/boxHeaderTitle.js';

class BoxHeader extends React.Component {
    render() {
        return (
            <div className="boxHeader">
                <BoxHeaderSymbol />
                <BoxHeaderTitle />
            </div>
        )
    }
}

export default BoxHeader;