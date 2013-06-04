Ext.define('Whatsforlunch.model.RestaurantProfile', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'uid', type:'int'},
            { name: 'url_name', type:'string'},
            { name: 'real_name', type:'string'},
            { name: 'address', type:'string'},
            { name: 'zip', type:'string'},
            { name: 'city', type:'string'},
            { name: 'phone', type:'string'},
            { name: 'email', type:'string'},
            { name: 'homepage', type:'string'},
            { name: 'seats_in', type:'auto'},

            { name: 'seats_out', type:'auto'},
            { name: 'lat', type:'auto'},  // Echt, ist so im JSON
            { name: 'lon', type:'auto'},
            { name: 'seo_text', type:'string'},
            { name: 'images', type:'string'},
            { name: 'url_name', type:'string'}


        ]
    }

});


var reader = Ext.create('Whatsforlunch.reader.Lunchgate');

var store = Ext.create('Ext.data.Store', {

    storeId: 'restaurantProfileStore',
    model: 'Whatsforlunch.model.RestaurantProfile',
    //autoLoad: true,

    proxy: {
        type: 'ajax',
        url : 'resources/fixtures/ah-hua_all.json',
        //reader: reader
    }

});

// store.load();