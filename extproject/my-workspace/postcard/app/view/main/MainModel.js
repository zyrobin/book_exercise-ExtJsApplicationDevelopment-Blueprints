/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Postcard.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    requires: [
        'Postcard.store.Threads',
        'Postcard.store.Messages',
        'Postcard.store.Tags'
    ],

    alias: 'viewmodel.main',

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
                    value: '{searchTerm}'
                }
            ]
        },

        messages: {
            type: 'messages'
        },

        tags: {
            type: 'tags',
            session: true
        }
    },


    formulas: {
        test: function(get) {
            return get('messages');
        }
    },

    data: {
        currentTag: 'Inbox',
        searchTerm: '',
        currentThread: null
    }
});
