Ext.define('Demo.model.Personnel', {
	 extend: 'Ext.data.Model',
	    fields: [{
	        name: 'id',
	        type: 'int',
	        useNull: true
	    }, 'email', 'first', 'last'],
	    validators : [{
	        type: 'length',
	        field: 'email',
	        min: 1
	    }, {
	        type: 'length',
	        field: 'first',
	        min: 1
	    }, {
	        type: 'length',
	        field: 'last',
	        min: 1
	    }]
});
