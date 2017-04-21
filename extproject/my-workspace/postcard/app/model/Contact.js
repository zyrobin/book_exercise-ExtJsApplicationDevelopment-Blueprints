Ext.define('Postcard.model.Contact', {
    extend: 'Postcard.model.BaseModel',
    fields: [
        { name: 'email' }
    ],
    proxy: {
        reader: {
            rootProperty: 'contacts'
        }
    }
});