import React from 'react';

import Box from '~/js/components/box/box.js';

import charts from 'fusioncharts/fusioncharts.charts';
charts(FusionCharts);

class App extends React.Component {
    render() {
        const { boxes } = this.props.data;
        return (
            <div id="mainDiv">
            {boxes.map((box, key) => (
                <Box key={key} boxData={box} />
            ))}
            </div>
        );
    }
}

export default App;