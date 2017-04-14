Ext.define('ArchitectureCms.view.main.Tree',{
    extend: 'Ext.tree.Panel',
    xtype: 'page-tree',
    rootVisible: false,
    tbar: [
        {
            xtype: 'textfield',
            emptyText: 'Search...',
            width: '100%',

            // 这里没有定义 ViewModel
            // 绑定的数据来自父组件的 ViewModel
            // 查询框的值与 ViewModel 中的 searchTerm 绑定
            bind: { value: '{searchTerm}' }
        }
    ],

    // 这里没有定义 ViewModel
    // 绑定的数据来自父组件的 ViewModel
    bind: {
        store: '{pages}',

        // 属性 searchFor 的也和 ViewModel 中的 searchTerm 绑定
        // 从而实现了查询框的值与 searchFor 值的绑定
        searchFor: '{searchTerm}'
    },

    // config 中设置的属性都会自动创建 getter, setter 函数，
    // 并且 setter 函数会自动调用属性的 apply 函数（本例中是 applySearchFor)
    config: {
        searchFor: null
    },

    // 当查询框中的值有变动时，会使 ViewModel 中的 searchTerm 
    // 出现同步变动，这又导致本组件中的 searchFor 属性值的 setter 函数
    // 的调用，即运行 setSearchFor，而 setSearchFor 会调用 applySearchFor。
    applySearchFor: function(text) {
        var root = this.getRootNode();
        var match = root.findChildBy(function(child){
            var txt = child.get('text');

            if (txt.match(new RegExp(text, 'i'))) {
                this.expandNode(child, true, function(){
                    var node = this.getView().getNode(child);
                    Ext.get(node).highlight();
                }, this);
            }
        }, this, true);
    }
});
