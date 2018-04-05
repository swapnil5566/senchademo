/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Demo.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Demo.view.main.MainController',
        'Demo.view.main.MainModel',
        'Demo.view.main.List',
        'Demo.view.main.PersonView',
        'Demo.view.emp.EmployeeList',
        'Demo.view.emp.EmployeeListPaging',
        'Demo.view.emp.Employee'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'Employee Info<br> System'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Employee Form',
        iconCls: 'fa-user',
        items: [{
            xtype: 'employeeForm',
            reference:'employeeEntryForm'
        }]
    }, {
        title: 'Employee List',
        iconCls: 'fa-users',
        items: [{
            xtype: 'employeeList',
            reference: 'employeeGrid'
        }]
    },
    {
        title: 'Employee List - Paging',
        iconCls: 'fa-users',
        items: [{
            xtype: 'employeeListPaging'
        }]
    }]
});
