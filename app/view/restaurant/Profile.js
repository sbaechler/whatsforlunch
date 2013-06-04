Ext.define('Whatsforlunch.view.restaurant.Profile', {
    extend: 'Ext.Container',

    xtype: 'restaurantprofile',

    config: {
        layout: 'vbox',
        title: '',


        items: [
            {
                flex: 1,
                layout: 'fit',
                scrollable: 'vertical',
                xtype: 'restaurantInfo'
            },
            {
                flex: 1,
                layout: 'fit',
                xtype: 'restaurantMenu',
                scrollable: 'vertical'
			},
            {
                flex: 1,
                layout: 'fit',
                xtype: 'imagecarousel'

            }
        ]
    }
});
