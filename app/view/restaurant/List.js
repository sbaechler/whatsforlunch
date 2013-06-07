Ext.define('Whatsforlunch.view.restaurant.List', {
    extend: 'Ext.List',
    requires: ['Whatsforlunch.view.restaurant.Detail'
    ],

    xtype: 'restaurantlist',


    config: {
        //scrollable: true,
        title: "Restaurants in deiner Nähe",

        itemTpl: ['<div class="restaurant">',
                    '<h3>{real_name} &nbsp;<small>{address} &nbsp;({distance})</small></h3>',
                  '</div>'],
        store: 'restaurantStore'
    }

});
