Ext.define('Whatsforlunch.view.restaurant.List', {
    extend: 'Ext.List',
    requires: ['Whatsforlunch.view.restaurant.Detail',
                'Ext.data.Store',
               'Whatsforlunch.reader.Lunchgate',
               'Whatsforlunch.model.Restaurant'
    ],

    xtype: 'restaurantlist',


    config: {
        //scrollable: true,
        title: "Restaurants in deiner Nähe",

        itemTpl: ['<div class="restaurant">',
                    '<h3>{real_name} &nbsp;<small>{address} &nbsp;({distance})</small></h3>',
                  '</div>'],
        store: Ext.create('Ext.data.Store', {

                   //storeId: 'restaurantStore',
                   model: 'Whatsforlunch.model.Restaurant',
                   proxy: {
                        type: 'ajax',
                        //url : 'resources/fixtures/bydistance.json',
                        url : 'get_json.php',
                        reader: Ext.create('Whatsforlunch.reader.Lunchgate')
                   }
                })
    }

});
