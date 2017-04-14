Ext.define('ArchitectureCms.store.Pages', {
    extend: 'Ext.data.TreeStore',
    model: 'ArchitectureCms.model.Page',
    alias: 'store.pages',

    // 必须设置一个空 root,
    // 否则当将该 Store 绑定到视图时会出错
    root: {} // set empty root as using bind doesn't do this
});
