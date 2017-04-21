// app/view/messages/MessagesController.js
Ext.define('Postcard.view.messages.MessagesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.messages',

    listen: {
        component: {
            '#reply': {
                click: 'onReplyClick'
            },

            '#setTag': {
                click: 'onTagChange'
            }
        }
    },

    routes: {
        'thread/:id/messages': 'onShowThread',
        'thread/new': 'onNewThread'
    },

    onShowThread:function(id) {
        this.getViewModel().get('messages').load({
            params: {
                parent: id
            },
            callback: function(records) {
                this.getView().show();
                this.getViewModel().set('currentThread', records[0]);
            },
            scope: this
        });
    },

    onNewThread: function() {
        this.getView().hide();
    },

    onReplyClick: function() {
        this.redirectTo(window.location.hash + '/new');
    },

    onTagChange: function() {
        var tagPicker = this.lookupReference('tagPicker'),
            newTag = tagPicker.getValue(),
            viewModel = this.getViewModel(),
            threadParent = viewModel.get('currentThread');

        threadParent.set('tag', newTag);
        threadParent.save({
            callback: function() {
                this.getViewModel().get('tags').reload();
                this.fireEvent('tagadded');
                this.fireEvent('threadschanged');
            },
            scope: this
        });
    }
});
