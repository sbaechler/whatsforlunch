Ext.define('Whatsforlunch.view.restaurant.Card', {

    extend: 'Ext.NavigationView',
    xtype: 'restaurantContainer',

    config: {

        title: 'Restaurants',
        iconCls: 'locate',

        autoDestroy: false,

        items: [
            {
                xtype: 'restaurantlist',
                store: 'restaurantStore',
                grouped: false,
                pinHeaders: false
            }
        ]
    }
});
