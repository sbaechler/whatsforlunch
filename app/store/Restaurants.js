Ext.define('Whatsforlunch.store.Restaurants', {
    extends: 'Ext.data.Store',

    requires: ['Whatsforlunch.reader.Lunchgate'],

    xtype: 'restaurantStore',

    storeId: 'restaurantStore',
    model: 'Whatsforlunch.model.Restaurant',
    proxy: {
           type: 'ajax',
           url : 'resources/fixtures/bydistance.json',
           //url : 'get_json.php',
           reader: Ext.create('Whatsforlunch.reader.Lunchgate')
    }
});