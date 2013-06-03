var reader = Ext.create('Whatsforlunch.reader.Lunchgate');

Ext.define('Whatsforlunch.store.RestaurantProfiles', {
    extend: 'Ext.data.TreeStore',

    config: {
        model: 'Whatsforlunch.model.RestaurantProfile',

        proxy: {
            type: 'ajax',
            url : 'resources/fixtures/ah-hua_all.json',
            reader: reader
        }
    }

});

var store = Ext.create('Whatsforlunch.store.RestaurantProfiles');