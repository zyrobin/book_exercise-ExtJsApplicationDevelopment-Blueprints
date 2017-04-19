Ext.define('Instrumatics.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-main',
    
    routes: {
        ':viewReference': 'onNavigate'
    },

    listen: {
        component: {
            'tabpanel': {
                tabchange: 'onTabChange'
            }
        }
    },

    onTabChange: function(tab, newCmp, oldCmp) {
        this.redirectTo(newCmp.getReference());
    },

    onNavigate: function(viewReference) {
        var view = this.getView();

        view.setActiveTab(view.lookupReference(viewReference));
    }
});