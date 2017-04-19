Ext.define('Instrumatics.view.web.WebModel', {
    extend: 'Instrumatics.view.SubPageModel',
    alias: 'viewmodel.web-web',
    stores: {
        categories: {
            fields: ['text', 'value'],
            data: [{
                text: 'Browser', value: 'browser'
            },{
                text: 'Location', value: 'location'
            },{
                text: 'Device Type', value: 'device'
            }]
        }
    },

    data: {
        currentCategory: 'browser'
    }
});
