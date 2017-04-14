/**
 * @class CrudTree.store.Pages
 * @extends Ext.data.NodeStore
 */
Ext.define('CrudTree.store.SearchResults', {
    extend: 'Ext.data.Store',
    model: 'CrudTree.model.SearchResult',
    alias: 'store.searchresults'
});