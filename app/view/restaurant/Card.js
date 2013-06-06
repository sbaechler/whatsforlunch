Ext.define('Whatsforlunch.view.restaurant.Card', {

    extend: 'Ext.NavigationView',
    requires: 'Ext.SegmentedButton',

    xtype: 'restaurantContainer',

    config: {

        iconCls: 'locate',
        ui: 'light',

        autoDestroy: false,

        items: [
            {
                xtype: 'restaurantlist'
            }
        ]
    }
});
