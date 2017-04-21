Ext.define('Postcard.view.threads.ThreadsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.threads',

    requires: [
        'Postcard.store.Threads'
    ],

    stores: {
        threads: {
            type: 'threads',
            remoteFilter: true,
            filters: [
                {
                    property: 'tag',
                    value: '{currentTag}'
                },
                {
                    property: 'searchTerm',
                    value: '%{searchTerm}%'
                }
            ]
        }
    }
});
