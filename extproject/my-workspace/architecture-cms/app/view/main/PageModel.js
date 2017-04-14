Ext.define('ArchitectureCms.view.main.PageModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.page',

    requires: ['ArchitectureCms.store.Pages'],

    stores: {
        pages: {
            type: 'pages', // 通过 Store 别名引用


            // Ext.data.Session 是应用用来集中数据的方式，
            // 确保 Store 使用了相同的数据集，而无需进行
            // 重复加载，
            // 它还使批量更新和删除更加容易
            session: true
        }
    },

    data: {
        searchTerm: null
    },

    formulas: {
        isUnsavedPage: function(get) {
            return get('page.id').toString().indexOf('Unsaved-') > -1;
        }
    }

    // currentPage 可以在其它地方设置
});
