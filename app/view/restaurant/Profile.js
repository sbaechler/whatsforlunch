Ext.define('Whatsforlunch.view.restaurant.Profile', {
    extend: 'Ext.Container',

    xtype: 'restaurantProfile',

    config: {
        layout: 'vbox',

        items: [
            {
                flex: 3,
                scrollable: 'vertical',
                xtype: 'restaurantInfo'
            },
            {
                flex: 2,
                xtype: 'imagecarousel'

            }
        ]
    }
});
