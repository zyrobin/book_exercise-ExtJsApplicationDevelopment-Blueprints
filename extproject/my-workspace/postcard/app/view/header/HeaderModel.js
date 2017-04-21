Ext.define('Postcard.view.header.HeaderModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.header',

    requires: [
        'Postcard.store.Tags'
    ],

    stores: {
        tags: {
            type: 'tags',
            session: true
        }
    }
});
