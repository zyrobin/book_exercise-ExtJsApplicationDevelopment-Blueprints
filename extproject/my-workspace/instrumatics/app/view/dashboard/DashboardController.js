Ext.define('Instrumatics.view.dashboard.DashboardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard-dashboard',
    
    init: function() {
        var data = this.getViewModel().getData(),
            me = this;

        setInterval(function() {
            // append to store, not add and update
            data.webLogs.load({ addRecords: true });
            data.sqlLogs.load({ addRecords: true });
        }, 1000);
    }
});
