/**
 * Created by a615484 on 4/4/2018.
 */
Ext.define('Demo.view.emp.Employee', {
	extend: 'Ext.form.Panel',

    xtype: 'employeeForm',
    title: 'Employee Entry Form',

    controller: 'employee',
    
    initComponent: function () {
        Ext.apply(this,
        {
            //set jsonsubmit to true for CUD operation using form.Submit()
            jsonSubmit: true,
            url: 'http://localhost:9000/info/employeeService/emps/',
            resizable: false,
            collapsible: false,
            bodyPadding: '5',
            buttonAlign: 'center',
            border: false,
            trackResetOnLoad: true,
            layout:
            {
                type: 'vbox'
            },
            fieldDefaults:
            {
                xtype: 'textfield',
                msgTarget: 'side',
                labelAlign: 'top',
                labelStyle: 'font-weight:bold'
            },
            defaultType: 'textfield',
            items: [{
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    defaultType: 'textfield',
                    width: '100%',
                    fieldDefaults:
                    {
                        labelAlign: 'top',
                        labelStyle: 'font-weight:bold'
                    },
                    items: [{
                        fieldLabel: 'Id',
                        name: 'empID',
                        readOnly: true,
                        margin: '0 0 0 5',
                        width: 55
                    },
                    {
                        fieldLabel: 'First Name',
                        flex: 1,
                        name: 'first',
                        margin: '0 0 0 5',
                        allowBlank: false
                    },
                    {
                            fieldLabel: 'Last Name',
                            flex: 1,
                            margin: '0 0 0 5',
                            name: 'last',
                            allowBlank: false
                    },
                    {
                            fieldLabel: 'Email Id',
                            flex: 1,
                            margin: '0 0 0 5',
                            name: 'email',
                            allowBlank: false
                    }]
                }],
            buttons: [{
                text: 'Create',
                itemId: 'btnCreate',
                formBind: true,
                handler: 'onCreateClick'
            }/*,
            {
                text: 'Read',
                itemId: 'btnLoad',
                handler: 'onReadClick'
            },

            {
                text: 'Update',
                itemId: 'btnUpdate',
                formBind: true,
                handler: 'onUpdateClick'
            },
            {
                text: 'Delete',
                itemId: 'btnDelete',
                formBind: true,
                handler: 'onDeleteClick'
            }*/,
            {
                text: 'Reset',
                itemId: 'btnReset',
                handler: 'onResetClick'
            },
            {
                text: 'Clear',
                itemId: 'btnClear',
                handler: 'onClearClick'
            }]
        });

        this.callParent(arguments);

    },
    clearForm: function () {
        this.getForm().getFields().each(function (field) {
            field.validateOnChange = false;
            field.setValue('');
            field.resetOriginalValue();
        });
    }
    
    
});