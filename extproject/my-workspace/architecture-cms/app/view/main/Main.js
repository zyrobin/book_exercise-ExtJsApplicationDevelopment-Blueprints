
Ext.define('ArchitectureCms.view.main.Main',{
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    requires: [
        'ArchitectureCms.view.main.Detail',
        'ArchitectureCms.view.main.Tree'
    ],


    // Ext.data.Session 是应用用来集中数据的方式，
    // 确保 Store 使用了相同的数据集，而无需进行
    // 重复加载，
    // 它还使批量更新和删除更加容易
    // 在最顶层的组件中设置 session: true,
    // 从而 Ext 会创建一个 session，并在应用中的
    // 各个部分中都能共用。
    // 本例中：
    // tree 和 detail 面板都共用相同的 model 实例，
    // 故当 detail 的数据有更新时，会更新到 ViewModel，
    // 进而更新到 tree 上。
    session: true, // 应用中的所有数据 (Store) 都集中放在 Session

    // 通过别名来指定 ViewController, ViewModel
    // Sencha Cmd 能自动处理这些依赖，故无需
    // 添加到 requires 中
    controller: 'main',
    viewModel: 'page',

    title: 'Architect CMS',
    // 绑定的属性值只能在 ViewModel 中的数据有变动时才会设置，
    // 因此我们在上面设置了 title 的默认值
    bind: {
        title: 'Architect CMS - Currently Editing "{currentPage.text}"'
    },

    layout: 'border',

    items: [
        {
            xtype: 'page-detail',
            region: 'center',
            reference: 'detail'
        },
        {
            xtype: 'page-tree',
            region: 'west',
            width: 300,
            reference: 'tree',
            split: true
        }
    ]
});
