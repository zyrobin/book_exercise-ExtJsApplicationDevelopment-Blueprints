Ext.define('Instrumatics.view.web.WebController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.web-web',

    init: function() {
        this.listen({
            component: {
                'combo': {
                    select: function(combo, sel) {
                        // sel = sel[0];

                        // this.getViewModel().get('logStatistics').load({
                        //     params: {
                        //         category: sel.get('value')
                        //     }
                        // });
                    }
                }
            }
        });
    }
});
