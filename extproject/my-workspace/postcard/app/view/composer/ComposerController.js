// app/view/composer/ComposerController.js
Ext.define('Postcard.view.composer.ComposerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.composer',
    listen: {
        component: {
            'button': {
                click: 'onSendClick'
            }
        }
    },

    routes: {
        'thread/:id/messages': 'hideComposer',
        'thread/:id/messages/new': 'showComposer',
        'thread/new': 'showComposer'
    },

    hideComposer: function() {
        this.getView().hide();
    },

    showComposer: function(thread) {
        this.getViewModel().set('newMessage.thread', thread);
        this.getView().show();
    },

    onSendClick: function() {
        var session = this.getSession(),
            data = this.getViewModel().get('newMessage');

        session.createRecord('Postcard.model.Message', {
            people: data.people,
            subject: data.subject,
            body: data.body,
            thread: data.thread
        });

        var batch = session.getSaveBatch().start();

        batch.on('complete', this.onSaveComplete, this);
    },

    onSaveComplete: function(batch, operation) {
        var record = operation.getRecords()[0],
            id = record.getId(),
            thread = record.get('thread');

        this.redirectTo('thread/' + (thread || id) + '/messages');
    }
});
