/**
 * Created by a615484 on 4/2/2018.
 */
Ext.define('Demo.controller.Personnel', {
	
	extend: 'Ext.app.ViewController',
    alias: 'controller.cell-editing',

    onAddClick: function () {
        var view = this.getView(),
            rec = new Demo.model.Personnel({
            	empId: 4,
            	first: 'First Name',
                last: 'Last Name',
                email: 'new@demo.com'
            });
        view.store.insert(0, rec);
        view.findPlugin('rowediting').startEdit(rec, 0);
    },

    onRemoveClick: function () {
    	var view = this.getView(),
        selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection) {
        	view.store.remove(selection);
        }
    }
});