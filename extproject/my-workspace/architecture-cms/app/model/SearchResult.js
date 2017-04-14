Ext.define('CrudTree.model.SearchResult', {
    extend: 'Ext.data.Model',
    proxy: {
        url: 'http://localhost:3000/searchresults'
    }
});
