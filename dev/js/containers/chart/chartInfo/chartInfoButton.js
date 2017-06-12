import React from 'react';

class ChartInfoButton extends React.Component {
    render() {
        return (
            <div className="chartInfoButton">
                <button className="changeButton" onClick={() => (console.log('not implemented yet'))}>
                    {this.props.buttonText}
                </button>
            </div>
        )
    }
}

export default ChartInfoButton;