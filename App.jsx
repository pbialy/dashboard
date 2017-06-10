import React from 'react';
import {connect} from 'react-redux';

import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

// Pass fusioncharts as a dependency of charts
charts(FusionCharts)

class App extends React.Component {
    render() {
        var myDataSource = {
            "chart": {
                "caption": "Actual Revenues, Targeted Revenues & Profits",
                "subcaption": "Last year",
                "xaxisname": "Month",
                "yaxisname": "Amount (In USD)",
                "numberprefix": "$",
                "theme": "ocean"
            },
            "categories": [{
                "category": [{
                    "label": "Jan"
                }, {
                    "label": "Feb"
                }, {
                    "label": "Mar"
                }, {
                    "label": "Apr"
                }, {
                    "label": "May"
                }, {
                    "label": "Jun"
                }, {
                    "label": "Jul"
                }, {
                    "label": "Aug"
                }, {
                    "label": "Sep"
                }, {
                    "label": "Oct"
                }, {
                    "label": "Nov"
                }, {
                    "label": "Dec"
                }]
            }],
            "dataset": [{
                "seriesname": "Actual Revenue",
                "data": [{
                    "value": "16000"
                }, {
                    "value": "20000"
                }, {
                    "value": "18000"
                }, {
                    "value": "19000"
                }, {
                    "value": "15000"
                }, {
                    "value": "21000"
                }, {
                    "value": "16000"
                }, {
                    "value": "20000"
                }, {
                    "value": "17000"
                }, {
                    "value": "25000"
                }, {
                    "value": "19000"
                }, {
                    "value": "23000"
                }]
            }, {
                "seriesname": "Projected Revenue",
                "renderas": "line",
                "showvalues": "0",
                "data": [{
                    "value": "15000"
                }, {
                    "value": "16000"
                }, {
                    "value": "17000"
                }, {
                    "value": "18000"
                }, {
                    "value": "19000"
                }, {
                    "value": "19000"
                }, {
                    "value": "19000"
                }, {
                    "value": "19000"
                }, {
                    "value": "20000"
                }, {
                    "value": "21000"
                }, {
                    "value": "22000"
                }, {
                    "value": "23000"
                }]
            }, {
                "seriesname": "Profit",
                "renderas": "area",
                "showvalues": "0",
                "data": [{
                    "value": "4000"
                }, {
                    "value": "5000"
                }, {
                    "value": "3000"
                }, {
                    "value": "4000"
                }, {
                    "value": "1000"
                }, {
                    "value": "7000"
                }, {
                    "value": "1000"
                }, {
                    "value": "4000"
                }, {
                    "value": "1000"
                }, {
                    "value": "8000"
                }, {
                    "value": "2000"
                }, {
                    "value": "7000"
                }]
            }]
        };

        var chartConfigs = {
            id: "revenue-profits-chart",
            renderAt: "revenue-profits-chart-container",
            type: "mscombi2d",
            width: 600,
            height: 400,
            dataFormat: "json",
            dataSource: myDataSource
        };
        return (
            <div id="mainDiv">
                <p>hi</p>
                <h2>mom</h2>
                <ReactFC {...chartConfigs} />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        //displayMode: state.displayMode
    }
}

//export default connect(mapStateToProps)(App);

export default App;