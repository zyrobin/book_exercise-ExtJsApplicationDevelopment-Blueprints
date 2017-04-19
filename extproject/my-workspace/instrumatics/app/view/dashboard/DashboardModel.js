Ext.define('Instrumatics.view.dashboard.DashboardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dashboard-dashboard',
    
    requires: [
        'Instrumatics.store.LogStream',
        'Instrumatics.store.LogEntries'
    ],

    stores: {
        webLogs: {
            type: 'logstream',
            filters: [{
                property: 'type',
                value: 'web'
            }]
        },

        sqlLogs: {
            type: 'logstream',
            filters: [{
                property: 'type',
                value: 'sql'
            }]
        },

        historicalWebLogs: {
            type: 'logentries',
            filters: [{
                property: 'type', 
                value: 'web'
            }]
        },

        historicalSqlLogs: {
            type: 'logentries',
            filters: [{
                property: 'type',
                value: 'sql'
            }]
        }
    }
});
