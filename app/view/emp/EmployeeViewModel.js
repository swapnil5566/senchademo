/**
 * Created by a615484 on 4/2/2018.
 */
Ext.define('Demo.view.emp.EmployeeViewModel', {
	extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.employeeviewmodel',
    stores: {
        EmployeeListStore: {
            model: 'Demo.model.Employee',
            
            autoLoad: true,
            autoSync: true,
            proxy:
            {
                type: 'rest',
                url: 'http://localhost:9000/info/employeeService/emps/',
                reader:
                {
                   type: 'json',
                   rootProperty: 'data'
                },
                writer: {
                    type: 'json'                    
                }
            }
        },
        EmployeeListPagingStore: {
            model: 'Demo.model.Employee',
            autoLoad: true,
            pageSize: 5,
            proxy:
           {
               type: 'rest',
               url: 'http://localhost:9000/info/employeeService/emps/',
               reader:
               {
                   type: 'json',
                   totalProperty: 'TotalCount',
                   rootProperty: 'data'
               }
           }
        }

    }
});