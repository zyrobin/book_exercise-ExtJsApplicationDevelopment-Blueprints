Ext.define('ArchitectureCms.model.Page', {
    extend: 'Ext.data.TreeModel',

    requires: [
        'Ext.data.proxy.Rest'
    ],

    // ID 属性名为 clientId
    clientIdProperty: 'clientId',

    // ID 值是连续值，
    // 如果服务器没有显式设置该值，
    // 则返回的该值有 'Unsaved-' 前缀
    identifier: {
        type: 'sequential',
        prefix: 'Unsaved-'
    },

    schema: {
        // Ext 将自动从 Model 命名中删除该 namespace 前缀，
        // 剩下专门的 Model 名 (这里是 Page) 用于构建 URL
        namespace: 'ArchitectureCms.model',

        // URL 前缀
        //urlPrefix: 'http://localhost:8000/architecturecms',
        urlPrefix: '/architecturecms',
        proxy: {
            type: 'rest',

            // 使用上面定义的选项值构建 URL
            // {prefix} 值来自 urlPrefix
            // {entityName} 值为 Page，这里用其小写形式
            url: '{prefix}/{entityName:uncapitalize}s/'
        }
    },
    
    fields: [
        { name: 'body' },
        { name: 'stub' },
        { name: 'text' },
        { name: 'published' }

    ]
});
