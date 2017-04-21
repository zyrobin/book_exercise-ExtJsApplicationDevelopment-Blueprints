Ext.define('Postcard.model.Message', {
    extend: 'Postcard.model.BaseModel',
    fields: [
        { name: 'id' },
        { name: 'parent' },
        { name: 'people' },
        { name: 'subject' },
        { name: 'body' },
        { name: 'date', type: 'date', dateFormat: 'Y-m-dTH:i:s P'},
    ],
    proxy: {
        reader: {
            rootProperty: 'messages'
        }
    }
});
