Ext.define('Whatsforlunch.view.restaurant.Card', {

    extend: 'Ext.NavigationView',

    xtype: 'restaurantContainer',

    config: {

        iconCls: 'locate',
        ui: 'light',

        autoDestroy: true,

        items: [
            {
                xtype: 'restaurantlist'
            }
        ]

    }
});
