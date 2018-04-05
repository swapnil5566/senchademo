Ext.define('Demo.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: Demo.model.Personnel,
    autoLoad: true,
    autoSync: true,
    proxy: {
    	 type: 'rest',
         url: 'http://localhost:9000/info/employeeService/emps',
         reader: {
             type: 'json',
         },
         writer: {
             type: 'json'
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
    }
     
});
