Ext.define('Whatsforlunch.view.restaurant.Card', {
    extend: 'Ext.NavigationView',

    requires: ['Whatsforlunch.view.restaurant.List'],

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
