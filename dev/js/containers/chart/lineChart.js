import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
charts(FusionCharts);

class LineChart extends React.Component {
    render() {

        const myDataSource = {
            "chart": {
                "subcaption": "Revenue per week",
                "xaxisname": "Week",
                "yaxisname": "Amount (In USD)",
                "adjustDiv": "0",
                "yAxisMinValue": "0",
                "yAxisMaxvalue": "1000",
                "numDivLines": "1",
                "showCanvasBorder": "0",
                "captionAlignment": "right",
                "subCaptionFontBold": "0",
                "canvasPadding": "20",
                "formatNumberScale": "0",
                "thousandSeparator": " ",
                "lineThickness": "5",
                "baseFontColor": "#014677",
                "showAlternateHGridColor": "0",
                "bgColor": "#ffffff",
                "showBorder": "0",
            },
            "categories": [{
                "category": [{
                    "label": "48"
                }, {
                    "label": "49"
                }, {
                    "label": "50"
                }, {
                    "label": "51"
                }, {
                    "label": "52"
                }]
            }],
            "dataset": [{
                "seriesname": "Net Comp",
                "renderas": "line",
                "showvalues": "0",
                "color": "#e06c00",
                "data": [{
                    "value": "620"
                }, {
                    "value": "721"
                }, {
                    "value": "856"
                }, {
                    "value": "911"
                }, {
                    "value": "285"
                }]
            }, {
                "seriesname": "AnalyzerHR",
                "renderas": "line",
                "showvalues": "0",
                "color": "#139300",
                "data": [{
                    "value": "449"
                }, {
                    "value": "451"
                }, {
                    "value": "511"
                }, {
                    "value": "697"
                }, {
                    "value": "153"
                }]
            }, {
                "seriesname": "Question Right",
                "renderas": "line",
                "showvalues": "0",
                "color": "#0088ea",
                "data": [{
                    "value": "293"
                }, {
                    "value": "148"
                }, {
                    "value": "266"
                }, {
                    "value": "261"
                }, {
                    "value": "23"
                }]
            }]
        };

        const chartConfigs = {
            //Revenue by Solution
            id: "revenue-by-solution",
            renderAt: "revenue-by-solution-container",
            type: "msline",
            width: 720,
            height: 300,
            dataFormat: "json",
            dataSource: myDataSource
        };

        return (
            <div className="chart">
                <ReactFC {...chartConfigs} />
            </div>
        )
    }
}

export default LineChart;