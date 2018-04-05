/**
 * Created by a615484 on 3/30/2018.
 */
Ext.define('Demo.view.main.PersonView', {
	extend: 'Ext.grid.Panel',
    xtype: 'personList',
    
    requires: [
               'Demo.store.Personnel'
           ],
           
           title: 'Personnel',

           store: {
               type: 'personnel'
           },

           columns: [
               { text: 'First Name',  dataIndex: 'first' },
               { text: 'Last Name',  dataIndex: 'last' },
               { text: 'Email', dataIndex: 'email', flex: 1 },
            ],
});