import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
charts(FusionCharts);

class ColumnChart extends React.Component {
    render() {

        const myDataSource = {
            "chart": {
                "subcaption": "Installations per day",
                "xAxisName": "Week",
                "yAxisName": "Installations",
                "adjustDiv": "0",
                "yAxisMinValue": "0",
                "yAxisMaxvalue": "10",
                "numDivLines": "1",
                //"numberSuffix": " Years",
                //"halfErrorBar": "0",
                "paletteColors": "#ED6E37,#259E01,#15A0C8",
                "showValues": "0",
                "captionAlignment": "right",
                "subCaptionFontBold": "0",
                "canvasPadding": "20",
                "baseFontColor": "#014677",
                //"errorBarColor": "666666",
                "bgColor": "#ffffff",
                "showBorder": "0",
                "showCanvasBorder": "0",
                "usePlotGradientColor": "0",
                //"showXAxisLine": "1",
                //"axisLineAlpha": "25",
                //"legendBorderAlpha": "0",
                //"legendShadow": "0",
                //"legendBgAlpha": "0",
                //"showShadow": "0",
                "showAlternateHgridColor": "0",
                "plotSpacePercent": "80",
                //"seriesSpacePercent": "80",
                "showPlotBorder": "0",
                "showHoverEffect": "1"
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "48"
                        },
                        {
                            "label": "49"
                        },
                        {
                            "label": "50"
                        },
                        {
                            "label": "51"
                        },
                        {
                            "label": "52"
                        }
                    ]
                }
            ],
            "dataset": [
                {
                    "seriesname": "Net Comp",
                    "data": [
                        {
                            "value": "6"
                        },
                        {
                            "value": "7"
                        },
                        {
                            "value": "8"
                        },
                        {
                            "value": "9"
                        },
                        {
                            "value": "3"
                        }
                    ]
                },
                {
                    "seriesname": "AnalyzerHR",
                    "data": [
                        {
                            "value": "4"
                        },
                        {
                            "value": "3"
                        },
                        {
                            "value": "5"
                        },
                        {
                            "value": "7"
                        },
                        {
                            "value": "2"
                        }
                    ]
                },
                {
                    "seriesname": "Question Right",
                    "data": [
                        {
                            "value": "3"
                        },
                        {
                            "value": "1"
                        },
                        {
                            "value": "2"
                        },
                        {
                            "value": "2"
                        },
                        {
                            "value": "1"
                        }
                    ]
                }
            ]
        };

        const chartConfigs = {
            id: "installations",
            renderAt: "installations-container",
            type: 'mscolumn2d',
            width: 720,
            height: 300,
            dataFormat: "json",
            dataSource: myDataSource
        };

        // check link below
        // http://www.fusioncharts.com/dev/chart-attributes.html?chart=errorbar2d
        return (
            <div className="chart">
                <ReactFC {...chartConfigs} />
            </div>
        )
    }
}

export default ColumnChart;