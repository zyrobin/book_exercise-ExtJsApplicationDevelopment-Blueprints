Ext.define('ArchitectureCms.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: ['ArchitectureCms.model.Page'],

    init: function(){
        this.listen({
            component: {
                'treepanel': {
                    'select': 'onPageSelect'
                },
                'page-detail #save': {
                    click: 'onSaveClick'
                },
                'page-detail #addChild': {
                    click: 'onAddClick'
                },
                'page-detail #delete': {
                    click: 'onDeleteClick'
                }
            }
        });
    },

    onPageSelect: function(tree, model) {
        // 选择结点时设置 ViewMode 中的 currentPage 值
        this.getViewModel().setLinks(
            {
                currentPage: {
                    type: 'Page', // 一个 model.Page 对象
                    id: model.getId()
                }
            }
        );
    },


    onAddClick: function() {
        var me = this;

        var viewModel = me.getViewModel(),
        selectedPage = viewModel.getData().currentPage;

        if (selectedPage.leaf) {
            Ext.Msg.alert('Cant Add Page', 'Select Node ' + selectedPage.text + ' is a leaf' );
            return;
        }
        Ext.Msg.prompt('Add Page', 'Page Label', function (action, value) {
            if (action === 'ok') {
                var session = me.getSession(), 
                    viewModel = me.getViewModel(),
                    selectedPage = viewModel.getData().currentPage,
                    tree = me.lookupReference('tree');

                var newPage = session.createRecord('Page', {
                    text: value,
                    body: value,
                    parent: selectedPage.id,
                    leaf: true
                });

                selectedPage.insertChild(0, newPage);
                tree.setSelection(newPage);
                tree.expandNode(selectedPage);
            }
        });
    },

    onDeleteClick: function() {
        var me = this;
        Ext.Msg.confirm('Warning', "Are you sure you'd like to delete this record?", function(btn) {
            if(btn === 'yes') {
                me.getViewModel().get('currentPage').erase();
                me.getViewModel().set('currentPage', null);
                Ext.toast('Page deleted');
            }
            },
        this);
    },

    onSaveClick: function() {
        this.getViewModel().get('currentPage').save();
        Ext.toast('Page saved');
    }
});
