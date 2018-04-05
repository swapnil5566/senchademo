
Ext.define('Demo.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'cell-editing',
    controller: 'cell-editing',

    requires: [
        'Ext.data.*', 'Ext.grid.*'
    ],

    title: 'Employee Info',
    width: 680,
    height: 350,

    autoLoad: true,
        plugins: {
        rowediting: {
            listeners: {
                cancelEdit: function(rowEditing, context) {
                    // Canceling editing of a locally added, unsaved record: remove it
                    if (context.record.phantom) {
                        store.remove(context.record);
                    }
                }
            }
        }
    },

    store: {
        model: 'Demo.model.Personnel',

        proxy: {
        	type: 'rest',
            url: 'http://localhost:9000/info/employeeService/emps',

            reader: {
                type: 'json',
            },
            writer: {
                type: 'json'
            }
        }
    },
    listeners: {
        write: function(store, operation){
            var record = operation.getRecords()[0],
                name = Ext.String.capitalize(operation.action),
                verb;
                
                
            if (name == 'Destroy') {
                verb = 'Destroyed';
            } else {
                verb = name + 'd';
            }
            Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb, record.getId()));
            
        }
    },

    columns : [ {
		text : 'Employee ID',
		width : 100,
		sortable : true,
		dataIndex : 'empID',
		renderer: function(v, meta, rec) {
            return rec.phantom ? '' : v;
        }
	}, {
		text : 'Email',
		flex : 1,
		sortable : true,
		dataIndex : 'email',
		field : {
			xtype : 'textfield'
		}
	}, {
		header : 'First',
		width : 150,
		sortable : true,
		dataIndex : 'first',
		field : {
			xtype : 'textfield'
		}
	}, {
		text : 'Last',
		width : 150,
		sortable : true,
		dataIndex : 'last',
		field : {
			xtype : 'textfield'
		}
	} ],
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Add',
            iconCls: 'icon-add',
            handler: 'onAddClick'
        }, '-', {
            itemId: 'delete',
            text: 'Delete',
            iconCls: 'icon-delete',
            disabled: true,
            handler: 'onRemoveClick'
        }]
    }]
});