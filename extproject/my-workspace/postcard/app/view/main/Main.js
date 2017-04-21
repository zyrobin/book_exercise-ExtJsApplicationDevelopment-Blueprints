// app/view/main/Main.js
Ext.define('Postcard.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',
    plugins: ['viewport', 'responsive'], //automatical tackle dependencies
    controller: 'main',
    viewModel: 'main',
    session: true,

    requires: [
        'Postcard.view.header.Header',
        'Postcard.view.threads.Threads',
        'Postcard.view.messages.Messages',
        'Postcard.view.composer.Composer'
    ],

    dockedItems: [
        { xtype: 'app-header' },
        { 
            dock: 'bottom', xtype: 'button', cls: 'logout', 
            overCls: '', focusCls: '', text: 'Logout'
        }
    ],

    responsiveConfig: {
        'tall': {
            layout: {
                type: 'card'
            }
        },

        'wide': {
            layout: {
                type: 'hbox',
                align: 'stretch'
            }
        }
    },

    items: [
        { xtype: 'threads', flex: 1 },
        {
            xtype: 'container',
            flex: 1,
            defaults: { hidden: true },
            items: [
                { xtype: 'messages' },
                { xtype: 'composer' }
            ]
        }
    ],

    isCard: function() {
        return this.getLayout().type === 'card';
    }
});
