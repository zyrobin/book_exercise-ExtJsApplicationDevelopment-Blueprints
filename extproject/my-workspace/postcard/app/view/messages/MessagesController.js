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
                thread: id
            },
            callback: function(records) {
                this.getView().show();
                this.getViewModel().set('currentThread', id);
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
        var me = this;
        var tagPicker = this.lookupReference('tagPicker'),
            newTag = tagPicker.getValue(),
            viewModel = this.getViewModel(),
            threadId = viewModel.get('currentThread');

        thread = viewModel.get('threads').getById(threadId);

        if (thread) {
            thread.set('tag', newTag);
            thread.save({
                callback: function() {
                    viewModel.get('tags').reload();
                    this.fireEvent('tagadded');
                    this.fireEvent('threadschanged');
                },
                scope: me
            });
        }
    }
});
