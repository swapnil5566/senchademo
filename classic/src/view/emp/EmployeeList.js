/**
 * Created by a615484 on 4/2/2018.
 */
Ext.define('Demo.view.emp.EmployeeList', {
	extend: 'Ext.grid.Panel',
    xtype: 'employeeList',
    require : ['Ext.data.*', 'Ext.grid.*'],

    title: 'Employee List',

    controller: 'employee-list',
    viewModel: { type: 'employeeviewmodel' },
    reference:'employeelistgrid',
    selType: 'rowmodel',
    selModel:
    {
        mode: 'SINGLE'
    },
    viewConfig:
    {
        stripeRows: true
    },
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    bind: {
        store: '{EmployeeListStore}'
    },
    initComponent: function () {
        Ext.apply(this,
        {
        	
        	plugins: {
                rowediting: {
                    listeners: {
                        cancelEdit: function(rowEditing, context) {
                            if (context.record.phantom) {
                                store.remove(context.record);
                            }
                        }
                    }
                }
            },
           
            width: 800,
            height: 330,
            columns: [{
                text: "Employee Id",
                dataIndex: 'empID',
                width: 100,
                renderer: function(v, meta, rec) {
                    return rec.phantom ? '' : v;
                }
            },
            {
                text: "First Name",
                flex: 1,
                dataIndex: 'first',
                width: 150,
                editor: {
                    allowBlank: false
                },
                field: {
                    xtype: 'textfield'
                }
            },
            
            {
                text: "Last Name",
                flex: 1,
                dataIndex: 'last',
                width: 150,
                editor: {
                   allowBlank: false
                },
                field: {
                    xtype: 'textfield'
                }
            },
            {
                text: "Email",
                flex: 1,
                dataIndex: 'email',
                editor: {
                    allowBlank: false,
                    vtype: 'email'
                },
                field: {
                    xtype: 'textfield'
                }
            }],
            tbar: [{
                text: 'Add Employee',
                iconCls: 'fa-plus',
                handler: 'onAddClick'
            }, {
                itemId: 'removeEmployee',
                text: 'Remove Employee',
                iconCls: 'fa-times',
                reference: 'btnRemoveEmployee',
                handler: 'onRemoveClick',
                disabled: true
            }]
        });

        this.callParent(arguments);
    }
});