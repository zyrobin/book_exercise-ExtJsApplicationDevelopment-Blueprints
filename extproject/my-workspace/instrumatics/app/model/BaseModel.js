Ext.define('Instrumatics.model.BaseModel', {
    extend: 'Ext.data.Model',

    schema: {
        namespace: 'Instrumatics.model',
        urlPrefix: Ext.manifest.backend + '/instrumatics',
        proxy: {
            type: 'ajax',
            url: '{prefix}/{entityName:uncapitalize}'
        }
    }
});
