const lineChartSettings = {
    chartConfigs: {
        id: 'revenue-by-solution',
        renderAt: 'revenue-by-solution-container',
        type: 'msline',
        width: 720,
        height: 300,
        dataFormat: 'json'
    },
    dataSourceChartField: {
        subcaption: 'Revenue per week',
        subCaptionFontColor: '#000000',
        xaxisname: 'Week',
        yaxisname: 'Amount (In USD)',
        adjustDiv: '0',
        yAxisMinValue: '0',
        yAxisMaxvalue: '1000',
        numDivLines: '1',
        showCanvasBorder: '0',
        captionAlignment: 'right',
        subCaptionFontBold: '0',
        canvasPadding: '20',
        formatNumberScale: '0',
        thousandSeparator: ' ',
        lineThickness: '5',
        baseFontColor: '#014677',
        showAlternateHGridColor: '0',
        bgColor: '#FFFFFF',
        showBorder: '0'
    }
};

const columnChartSettings = {
    chartConfigs: {
        id: 'installations',
        renderAt: 'installations-container',
        type: 'mscolumn2d',
        width: 720,
        height: 300,
        dataFormat: 'json'
    },
    dataSourceChartField: {
        subcaption: 'Installations per day',
        subCaptionFontColor: '#000000',
        xAxisName: 'Week',
        yAxisName: 'Installations',
        adjustDiv: '0',
        yAxisMinValue: '0',
        yAxisMaxvalue: '10',
        numDivLines: '1',
        paletteColors: '#ED6E37,#259E01,#15A0C8',
        showValues: '0',
        captionAlignment: 'right',
        subCaptionFontBold: '0',
        canvasPadding: '20',
        baseFontColor: '#014677',
        bgColor: '#ffffff',
        showBorder: '0',
        showCanvasBorder: '0',
        usePlotGradientColor: '0',
        showAlternateHgridColor: '0',
        plotSpacePercent: '60',
        showPlotBorder: '0',
        numVisiblePlot: '20',
        showHoverEffect: '1'
    }
};

export {
    lineChartSettings,
    columnChartSettings
};