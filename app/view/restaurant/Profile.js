Ext.define('Whatsforlunch.view.restaurant.Profile', {
    extend: 'Ext.Container',

    xtype: 'restaurantprofile',

    config: {
        layout: 'vbox',
        title: '',


        items: [
            {
                flex: 3,
                layout: 'fit',
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
