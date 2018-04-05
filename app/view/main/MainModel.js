/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Demo.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Demo',

        loremIpsum: '',
        
        empHome: 'Welcome to Emplpyee Info System',
        empSetting: 'Settings'
    }

    //TODO - add data, formulas and/or methods to support your view
});
