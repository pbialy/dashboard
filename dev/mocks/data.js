const data = {
    boxes: [{
        chartType: 'line',
        symbol: '$',
        headerText: 'Revenue by Solution',
        chartData: {
            categories: [{
                category: [{
                    label: '48'
                }, {
                    label: '49'
                }, {
                    label: '50'
                }, {
                    label: '51'
                }, {
                    label: '52'
                }]
            }],
            dataset: [{
                seriesname: 'Net Comp',
                renderas: 'line',
                showvalues: '0',
                color: '#ED6E37',
                data: [{
                    value: '620'
                }, {
                    value: '721'
                }, {
                    value: '856'
                }, {
                    value: '911'
                }, {
                    value: '285'
                }]
            }, {
                seriesname: 'AnalyzerHR',
                renderas: 'line',
                showvalues: '0',
                color: '#259E01',
                data: [{
                    value: '449'
                }, {
                    value: '451'
                }, {
                    value: '511'
                }, {
                    value: '697'
                }, {
                    value: '153'
                }]
            }, {
                seriesname: 'Question Right',
                renderas: 'line',
                showvalues: '0',
                color: '#15A0C8',
                data: [{
                    value: '293'
                }, {
                    value: '148'
                }, {
                    value: '266'
                }, {
                    value: '261'
                }, {
                    value: '23'
                }]
            }]
        },
        chartInfo: {
            total: {
                value: '32,556',
                currency: '$',
                description: 'Revenue Stream'
            },
            buttonText: 'Revenue Analysis'
        }
    }, {
        chartType: 'column',
        symbol: '⇩',
        headerText: 'Installations',
        chartData: {
            categories: [{
                category: [{
                    label: '48'
                }, {
                    label: '49'
                }, {
                    label: '50'
                }, {
                    label: '51'
                }, {
                    label: '52'
                }]
            }],
            dataset: [{
                seriesname: 'Net Comp',
                data: [{
                    value: '6'
                }, {
                    value: '7'
                }, {
                    value: '8'
                }, {
                    value: '9'
                }, {
                    value: '3'
                }]
            }, {
                seriesname: 'AnalyzerHR',
                data: [{
                    value: '4'
                }, {
                    value: '3'
                }, {
                    value: '5'
                }, {
                    value: '7'
                }, {
                    value: '2'
                }]
            }, {
                seriesname: 'Question Right',
                data: [{
                    value: '3'
                }, {
                    value: '1'
                }, {
                    value: '2'
                }, {
                    value: '2'
                }, {
                    value: '1'
                }]
            }]
        },
        chartInfo: {
            total: {
                value: '136',
                description: 'Installations'
            },
            buttonText: 'View Installations'
        }
    }]
};
export default data