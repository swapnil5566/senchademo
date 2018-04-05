/**
 * Created by a615484 on 4/2/2018.
 */
Ext.define('Demo.model.Employee', {
	extend: 'Ext.data.Model',
	idProperty: 'empID',
	
    fields: [
        { name: 'empID', type: 'int' },
        { name: 'first', type: 'string' },
        { name: 'last', type: 'string' },
        { name: 'email', type: 'string' }
        
    ]
});