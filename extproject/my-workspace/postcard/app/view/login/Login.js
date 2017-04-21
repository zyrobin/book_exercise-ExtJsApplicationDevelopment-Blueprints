Ext.define('Postcard.view.login.Login',{
    extend: 'Ext.window.Window',
    xtype: 'login-window',

    title: 'Login to Postcard',
    closable: false,
    autoShow: true,
    cls: 'login',
    controller: 'login',
    viewModel: 'login',
    items: [{
        xtype: 'textfield',
        name: 'email',
        bind: '{login.email}',
        fieldLabel: 'Email',
        allowBlank: false
    }, {
        xtype: 'textfield',
        bind: '{login.password}',
        inputType: 'password',
        fieldLabel: 'Password',
        allowBlank: false
    }, {
        xtype: 'checkbox',
        bind: '{login.rememberMe}',
        fieldLabel: 'Remember Me?'
    }],

    buttons: [{ text: 'Login' }]
});