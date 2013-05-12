Ext.define('Whatsforlunch.model.Restaurant', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'id', type: 'auto' },
            { name: 'real_name', type: 'string' },
            { name: 'url_name', type: 'string' },
            { name: 'address', type: 'string' },
            { name: 'zip', type: 'auto' },
            { name: 'city', type: 'auto' },
            { name: 'latitude', type: 'auto' },
            { name: 'longitude', type: 'auto' },
            { name: 'distance', type: 'auto' }
        ]
    }
});

var reader = Ext.create('Whatsforlunch.reader.Lunchgate');

var store = Ext.create('Ext.data.Store', {

   storeId: 'restaurantStore',
   model: 'Whatsforlunch.model.Restaurant',
   //fields: ['real_name', 'address'],
   //autoLoad: true,
   sorters: 'distance',
   proxy: {
        type: 'ajax',
        url : 'get_json.php',
        reader: reader
   }
});

store.load();