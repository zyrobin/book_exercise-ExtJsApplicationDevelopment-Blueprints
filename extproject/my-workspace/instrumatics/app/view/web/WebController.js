Ext.define('Instrumatics.view.web.WebController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.web-web',

    init: function() {
        this.listen({
            component: {
                'button': {
                    click: function(btn) {
                        this.getViewModel().get('logData').reload();
                    }
                }
            }
        });
    }
});
