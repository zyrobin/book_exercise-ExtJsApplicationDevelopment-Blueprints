Ext.define('Instrumatics.view.SubPageModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'Instrumatics.store.LogEntries',
        'Instrumatics.store.Statistics'
    ],
    stores: {
        logData: {
            type: 'logentries',
            autoLoad: true,
            remoteFilter: true,
            filters: [
                // can bind to current ViewModel's data
                { property: 'startDate', value: '{currentStartDate}' },
                { property: 'endDate', value: '{currentEndDate}' }
            ]
        },

        logStatistics: {
            type: 'statistics',
            autoLoad: true,
            remoteFilter: true,
            filters: [
                { property: 'category', value: '{currentCategory}' },
                { property: 'startDate', value: '{currentStartDate}' },
                { property: 'endDate', value: '{currentEndDate}' }
            ]
        }
    },


    data: {
        currentStartDate: null,
        currentEndDate: null
    }
});
