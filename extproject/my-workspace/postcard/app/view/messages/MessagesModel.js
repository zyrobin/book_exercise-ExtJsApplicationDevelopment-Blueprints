Ext.define('Postcard.view.messages.MessagesModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.messages',

    requires: [
        'Postcard.store.Messages',
        'Postcard.store.Tags'
    ],

    stores: {
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
        currentThread: null
    }
});
