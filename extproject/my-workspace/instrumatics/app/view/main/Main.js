Ext.define('Instrumatics.view.main.Main', {
    extend: 'Ext.tab.Panel',

    requires: [
        'Instrumatics.view.dashboard.Dashboard',
        'Instrumatics.view.sql.Sql',        
        'Instrumatics.view.web.Web'
    ],

    xtype: 'app-main',
    controller: 'main-main',

    header: {
        title: {
            text: 'Instrumatics',
            padding: 20
        }
    },

    tabPosition: 'left',
    tabRotation: 0,

    items: [
        { xtype: 'app-dashboard', title: 'Dashboard', reference: 'dash' },
        { xtype: 'web-logs', title: 'Web', reference: 'web' },
        { xtype: 'sql-logs', title: 'SQL', reference: 'sql' }
    ]
});
