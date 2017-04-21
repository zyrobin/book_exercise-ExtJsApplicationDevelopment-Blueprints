Ext.define('Postcard.model.BaseModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.Rest'
    ],

    schema: {
        namespace: 'Postcard.model',
        urlPrefix: Ext.manifest.backend + '/postcard',
        proxy: {
            type: 'rest',
            url: '{prefix}/{entityName:uncapitalize}s/'
        }
    }
});
