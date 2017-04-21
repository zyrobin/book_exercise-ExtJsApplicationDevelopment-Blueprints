/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Postcard.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Postcard',

    controllers: [
        'Postcard.controller.Root'
    ],

    requires: [
        'Ext.plugin.Viewport',
        'Postcard.view.main.Main'
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});
