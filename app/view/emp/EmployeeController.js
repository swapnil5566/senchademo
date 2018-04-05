/**
 * Created by a615484 on 4/4/2018.
 */
Ext.define('Demo.view.emp.EmployeeController', {
	extend: 'Ext.app.ViewController',

    alias: 'controller.employee',
    
    onCreateClick: function (sender, record) {
        var employeeForm = this.getView().getForm();

        if (!employeeForm.isDirty()) {
            Ext.Msg.alert('Status', 'No new data to create.');
            return;
        }
        else if (!employeeForm.isValid()) {
            Ext.Msg.alert('Status', 'Invalid data.');
            return;
        }

        // Submit the Ajax request and handle the response
        employeeForm.submit({
            url: 'http://localhost:9000/info/employeeService/emps/',
            waitMsg: 'Saving..',
            headers:
            {
                'Content-Type': 'application/json'
            },
            clientValidation: true,
            submitEmptyText: true,
            success: function (form, action) {

                var employee = Ext.create('Demo.model.Employee');
                var resp = Ext.decode(action.response.responseText);

                if (resp.data[0]) {
                    // addemployee returns employee model with Id so we can re-load model into form so form will have isDirty false
                    employee.set(resp.data[0]);
                    employeeForm.loadRecord(employee);
                }

                Ext.Msg.alert('Status', 'Saved successfully.');

            },
            failure: function (form, action) {
                if (action.failureType === Ext.form.action.Action.CLIENT_INVALID) {
                    Ext.Msg.alert('CLIENT_INVALID', 'Something has been missed. Please check and try again.');
                }
                if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
                    Ext.Msg.alert('CONNECT_FAILURE', 'Status: ' + action.response.status + ': ' + action.response.statusText);
                }
                if (action.failureType === Ext.form.action.Action.SERVER_INVALID) {
                    Ext.Msg.alert('SERVER_INVALID', action.result.message);
                }
            }
        });
    },
    
    onReadClick: function (sender, record) {
        var employeeForm = this.getView().getForm();

        //result should contain success=true and data property otherwise it will go to failure even if there is no failure
        employeeForm.load({
        	url: 'http://localhost:9000/info/employeeService/emps/',
        	waitMsg: 'Loading...',
        	 method: 'GET',
            params:
            {
                empID: 62
            },
            /*headers:
            {
                'Content-Type': 'application/json'
            },*/
            success: function (form, action) {
                try {
                    var resp = Ext.decode(action.response.responseText);

                    if (resp.data.length > 0) {
                        var employee = Ext.create('Demo.model.Employee');
                        employee.set(resp.data[0]);
                        employeeForm.loadRecord(employee);
                    }
                }
                catch (ex) {
                    Ext.Msg.alert('Status', 'Exception: ' + ex.Message);

                }
            },
            failure: function (form, action) {
                Ext.Msg.alert("Load Failed", action.result.errorMessage);
            }
        });
    },
    
    onUpdateClick: function (sender, record) {
        var employeeForm = this.getView().getForm();

        if (!employeeForm.isDirty()) {
            Ext.Msg.alert('Status', 'No pending changes to save.');
            return;
        }
        else if (!employeeForm.isValid()) {
            Ext.Msg.alert('Status', 'Invalid data.');
            return;
        }

        employeeForm.submit({
            url: 'http://localhost:9000/info/employeeService/emps/',
            waitMsg: 'Updating..',
            method: 'PUT',
            headers:
            {
                'Content-Type': 'application/json'
            },
            clientValidation: true,
            success: function (form, action) {
                try {
                    var employee = Ext.create('Demo.model.Employee');
                    var resp = Ext.decode(action.response.responseText);

                    if (resp.data.length > 0) {
                        // addemployee returns employee model with Id so we can re-load model into form so form will have isDirty false
                        employee.set(resp.data[0]);
                        employeeForm.loadRecord(employee);
                    }

                    Ext.Msg.alert('Status', 'Saved successfully.');
                }
                catch (ex) {
                    Ext.Msg.alert('Status', 'Exception: ' + ex.Message);

                }
            },
            failure: function (form, action) {
                if (action.failureType === Ext.form.action.Action.CLIENT_INVALID) {
                    Ext.Msg.alert('CLIENT_INVALID', 'Something has been missed. Please check and try again.');
                }
                if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
                    Ext.Msg.alert('CONNECT_FAILURE', 'Status: ' + action.response.status + ': ' + action.response.statusText);
                }
                if (action.failureType === Ext.form.action.Action.SERVER_INVALID) {
                    Ext.Msg.alert('SERVER_INVALID', action.result.message);
                }
            }
        });
    },
    
    onDeleteClick: function (sender, record) {
        var me = this,
            employeeForm = me.getView();

        if (!employeeForm.getValues(false, false, false, true).Id) {
            Ext.Msg.alert('Status', 'Invalid or No data to delete.');
            return;
        }

        var employee = Ext.create('Demo.model.Employee'), data;

        employee.set(employeeForm.getValues());
        data = employee.getData();

        Ext.Msg.show({
            title: 'Delete',
            msg: 'Do you want to delete this record? ',
            width: 300,
            closable: false,
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonValue, inputText, showConfig) {
                if (buttonValue === 'yes') {

                    employeeForm.submit({
                        url: 'http://localhost:9000/info/employeeService/emps/',
                        method: 'DELETE',
                        clientValidation: true,
                        waitMsg: 'Deleting..',
                        headers:
                        {
                            'Content-Type': 'application/json'
                        },

                        success: function (form, action) {
                            try {
                                var resp = Ext.decode(action.response.responseText);
                                employeeForm.clearForm();

                                Ext.Msg.alert('Success', resp.message);
                            }
                            catch (ex) {
                                Ext.Msg.alert('Status', 'Exception: ' + ex.Message);

                            }
                        },
                        failure: function (form, action) {
                            if (action.failureType === Ext.form.action.Action.CLIENT_INVALID) {
                                Ext.Msg.alert('CLIENT_INVALID', 'Something has been missed. Please check and try again.');
                            }
                            if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
                                Ext.Msg.alert('CONNECT_FAILURE', 'Status: ' + action.response.status + ': ' + action.response.statusText);
                            }
                            if (action.failureType === Ext.form.action.Action.SERVER_INVALID) {
                                Ext.Msg.alert('SERVER_INVALID', action.result.message);
                            }
                        }
                    });
                }
            }

        });
    },
    onResetClick: function (sender, record) {
        this.getView().getForm().reset();
    },
    onClearClick: function (sender, record) {
        this.getView().clearForm();
    },
});