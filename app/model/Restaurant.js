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
            { // Distanz in m / km
                name: 'distance',
                type: 'string',
                convert: function(value, record) {
                    if(value) {
                        var distance = parseInt(value);
                        if(distance < 1000) {
                            return distance + "m";
                        } else {
                            return (distance/1000).toFixed(1) + "km";
                        }
                    }
                }
            }
        ],
        associations: { type: 'hasOne', model: 'Whatsforlunch.model.RestaurantProfile',
                        primaryKey: 'uid', foreignKey: 'id'}
    }
});

var reader = Ext.create('Whatsforlunch.reader.Lunchgate');

Whatsforlunch.app.restaurantStore = Ext.create('Ext.data.Store', {

   storeId: 'restaurantStore',
   model: 'Whatsforlunch.model.Restaurant',
   proxy: {
        type: 'ajax',
        //url : 'resources/fixtures/bydistance.json',
        url : 'get_json.php',
        reader: reader
   }
});
