// app/view/main/MainController.js
Ext.define('Postcard.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    routes: {
        'home': 'showLeftPane',
        'thread/new': 'showRightPane',
        'thread/:id/messages': 'showRightPane',
        'thread/:id/messages/new': 'showRightPane'
    },

    listen: {
        component: {
            'button[cls="logout"]': {
                click: function() {
                    window.localStorage.removeItem('loggedin');
                    window.location = '/';
                }
            }
        }
    },

    showRightPane: function(id) {
        if(this.getView().isCard()) {
            this.getView().setActiveItem(1);
        }
    },

    showLeftPane: function() {
        if(this.getView().isCard()) {
            this.getView().setActiveItem(0);
        }  
    }
});