import React from 'react';

class BoxHeaderTitle extends React.Component {
    render() {
        return (
            <div className="boxHeaderTitle">
                <div className="titleText">
                    {this.props.headerText}
                </div>
            </div>
        )
    }
}

export default BoxHeaderTitle;