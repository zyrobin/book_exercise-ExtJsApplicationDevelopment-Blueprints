/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Postcard.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        currentTag: 'Inbox',
        searchTerm: null
    }
});