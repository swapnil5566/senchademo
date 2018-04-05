/**
 * Created by a615484 on 4/2/2018.
 */
Ext.define('Demo.view.emp.EmployeeListController', {
	extend: 'Ext.app.ViewController',

    alias: 'controller.employee-list',

    onAddClick: function (sender, record) {
    	//adding dummy employee
    	var employeeStore = this.getView().getStore(),
        employeeModel = Ext.create('Demo.model.Employee');
        employeeModel.set("empID", 0);
        employeeModel.set("first", "First Name");
        employeeModel.set("last", "Last Name");
        employeeModel.set("email", "new@atos.net");
        var emplyeeGrid = this.getView();
        var edit =emplyeeGrid.findPlugin('rowediting');
        employeeStore.insert(0, employeeModel);
        edit.startEdit(employeeModel, 0);
    },

    onLoadClick: function (sender, record) {
        var employeeStore = this.getView().getStore();
        employeeStore.load();
    },

    onRemoveClick: function (sender, record) {
        var employeeGrid = this.getView();
        var employeeStore = employeeGrid.getStore();
        var selectedRows = employeeGrid.getSelectionModel().getSelection();
        if (selectedRows) {
        	employeeStore.remove(selectedRows);
        }

        
    },

    onSelectionChange: function (sender, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemoveEmployee');
        if(record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    }
});