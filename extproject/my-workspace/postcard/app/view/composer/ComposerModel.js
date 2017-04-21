// app/view/composer/ComposerModel.js
Ext.define('Postcard.view.Composer.ComposerModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.composer',

    requires: [
        'Postcard.store.Contacts'
    ],

    stores: {
        contacts: {
            type: 'contacts'
        }
    },

    data: {
        newMessage: {}
    }
});
