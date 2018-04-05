/**
 * Created by a615484 on 4/2/2018.
 */
Ext.define('Demo.view.emp.EmployeeListPaging', {
	extend: 'Ext.grid.Panel',
    xtype: 'employeeListPaging',

    title: 'Employee List - Paging Demo',

    viewModel: { type: 'employeeviewmodel' },
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
        store: '{EmployeeListPagingStore}'
    },
    initComponent: function () {
        Ext.apply(this,
        {
        	width: 800,
            height: 330,
            
            columns: [{
                text: "Employee Id",
                dataIndex: 'empID',
                width: 100
            },
            {
                text: "First Name",
                flex: 1,
                dataIndex: 'first',
                	 width: 150
            },
            {
                text: "Last Name",
                flex: 1,
                dataIndex: 'last',
           	 width: 150
            },
            
            {
                text: "Email",
                flex: 1,
                dataIndex: 'email'
            }],
            bbar: [{
                xtype: 'pagingtoolbar',
                bind:{
                    store: '{EmployeeListPagingStore}'
                },
                displayInfo: true,
                displayMsg: 'Displaying {0} to {1} of {2} &nbsp;records ',
                emptyMsg: "No records to display&nbsp;"
            }]

        });

        this.callParent(arguments);
    }
});